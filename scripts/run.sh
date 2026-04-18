#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

PKG="package.json"

if [[ ! -f "$PKG" ]]; then
  echo "No se encontró $PKG en $(pwd)" >&2
  exit 1
fi

if [[ -t 1 ]]; then
  C_RESET=$'\033[0m'
  C_BOLD=$'\033[1m'
  C_DIM=$'\033[2m'
  C_CYAN=$'\033[36m'
  C_GREEN=$'\033[32m'
  C_YELLOW=$'\033[33m'
  C_RED=$'\033[31m'
  C_BLUE=$'\033[34m'
  C_MAGENTA=$'\033[35m'
else
  C_RESET='' C_BOLD='' C_DIM='' C_CYAN='' C_GREEN='' C_YELLOW='' C_RED='' C_BLUE='' C_MAGENTA=''
fi

read_script() {
  node -e "const s=require('./package.json').scripts||{};process.stdout.write(s['$1']||'')"
}

has_script() {
  [[ -n "$(read_script "$1")" ]]
}

run_script() {
  local name="$1"
  local cmd
  cmd="$(read_script "$name")"
  if [[ -z "$cmd" ]]; then
    echo "${C_RED}El script '$name' no existe en package.json${C_RESET}" >&2
    return 1
  fi
  echo ""
  echo "${C_GREEN}▶${C_RESET} ${C_BOLD}npm run $name${C_RESET}"
  echo "  ${C_DIM}→ $cmd${C_RESET}"
  echo ""
  npm run "$name"
}

pick_script() {
  local label="$1"
  shift
  local candidates=("$@")
  local available=()
  for s in "${candidates[@]}"; do
    if has_script "$s"; then
      available+=("$s")
    fi
  done

  if [[ ${#available[@]} -eq 0 ]]; then
    echo "${C_RED}No hay scripts disponibles para: $label${C_RESET}" >&2
    return 1
  fi

  if [[ ${#available[@]} -eq 1 ]]; then
    run_script "${available[0]}"
    return $?
  fi

  echo ""
  echo "${C_CYAN}Varios scripts disponibles para '$label':${C_RESET}"
  local i=1
  for s in "${available[@]}"; do
    printf "  ${C_YELLOW}%d)${C_RESET} ${C_BOLD}%s${C_RESET}  ${C_DIM}→  %s${C_RESET}\n" "$i" "$s" "$(read_script "$s")"
    ((i++))
  done
  local choice
  read -rp "$(printf "${C_CYAN}Elige una opción [1-${#available[@]}] (por defecto 1):${C_RESET} ")" choice
  choice="${choice:-1}"
  if ! [[ "$choice" =~ ^[0-9]+$ ]] || (( choice < 1 || choice > ${#available[@]} )); then
    echo "${C_RED}Opción inválida${C_RESET}" >&2
    return 1
  fi
  run_script "${available[$((choice-1))]}"
}

print_menu() {
  local name version
  name="$(node -e "process.stdout.write(require('./package.json').name||'')")"
  version="$(node -e "process.stdout.write(require('./package.json').version||'')")"

  echo ""
  echo "${C_BLUE}════════════════════════════════════════${C_RESET}"
  echo "  ${C_BOLD}${C_MAGENTA}$name${C_RESET} ${C_DIM}@ $version${C_RESET}"
  echo "${C_BLUE}════════════════════════════════════════${C_RESET}"
  echo "  ${C_YELLOW}1)${C_RESET} ${C_GREEN}Ejecutar en local${C_RESET}      ${C_DIM}(start)${C_RESET} ${C_BOLD}[por defecto]${C_RESET}"
  echo "  ${C_YELLOW}2)${C_RESET} ${C_GREEN}Build de producción${C_RESET}    ${C_DIM}(build)${C_RESET}"
  echo "  ${C_YELLOW}3)${C_RESET} ${C_GREEN}Deploy a GitHub Pages${C_RESET}  ${C_DIM}(deploy)${C_RESET}"
  echo "  ${C_YELLOW}4)${C_RESET} ${C_GREEN}Ver todos los scripts${C_RESET}"
  echo "  ${C_YELLOW}q)${C_RESET} ${C_RED}Salir${C_RESET}"
  echo "${C_BLUE}════════════════════════════════════════${C_RESET}"
}

list_all_scripts() {
  echo ""
  echo "${C_CYAN}${C_BOLD}Scripts definidos en package.json:${C_RESET}"
  node -e "
    const s=require('./package.json').scripts||{};
    for (const [k,v] of Object.entries(s)) {
      console.log('  \x1b[33m' + k.padEnd(22) + '\x1b[0m \x1b[2m→\x1b[0m ' + v);
    }
  "
}

check_git_clean() {
  if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
    return 0
  fi
  if [[ -n "$(git status --porcelain)" ]]; then
    echo ""
    echo "${C_YELLOW}⚠  Tienes cambios sin commitear:${C_RESET}"
    git status --short
    read -rp "$(printf "${C_YELLOW}¿Continuar con el deploy? [y/N]:${C_RESET} ")" ans
    [[ "$ans" =~ ^[yY]$ ]] || return 1
  fi
}

main() {
  while true; do
    print_menu
    read -rp "$(printf "${C_CYAN}Selecciona una opción${C_RESET} ${C_DIM}[1]:${C_RESET} ")" opt
    opt="${opt:-1}"
    case "$opt" in
      1) pick_script "ejecutar en local" start start:host ;;
      2) pick_script "build" build:prod build:gh build ;;
      3)
        check_git_clean || { echo "${C_YELLOW}Deploy cancelado.${C_RESET}"; continue; }
        if [[ -n "${GIT_CONFIG:-}" ]]; then
          echo "${C_YELLOW}ℹ  GIT_CONFIG=$GIT_CONFIG detectado — se desactiva solo para este deploy (gh-pages necesita leer .git/config).${C_RESET}"
        fi
        ( unset GIT_CONFIG && pick_script "deploy" deploy )
        ;;
      4) list_all_scripts ;;
      q|Q) echo "${C_MAGENTA}Hasta luego.${C_RESET}"; exit 0 ;;
      *) echo "${C_RED}Opción no válida.${C_RESET}" ;;
    esac
  done
}

main "$@"
