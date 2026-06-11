# Stack tecnológico frontend — experiencia profesional actual

> Material de contenido para el portfolio (sección *skills* / *experience* de
> `src/app/resume.data.ts`). Complementa a `stack-tecnologico-experiencia-actual.md`
> con el detalle del lado frontend: varias plataformas Angular paralelas que
> comparten arquitectura y convenciones, donde cada patrón, componente o fix se
> diseña una vez y se replica y mantiene en todas ellas.

## Resumen

Desarrollo frontend de plataformas web profesionales con **Angular +
TypeScript**: SPAs modulares con lazy loading, estado reactivo con RxJS,
entidades tipadas espejando el CQRS del backend, internacionalización en 7
idiomas con tooling propio, y entrega continua con Docker y GitLab CI hasta
producción. Responsable del ciclo completo: arquitectura de módulos, librería
interna de componentes reutilizables, formularios complejos, theming,
pipelines de CI/CD y verificación visual de los despliegues.

## Arquitectura de la aplicación

- **Angular 14 + TypeScript** con *strict templates* — aplicación organizada
  en **feature modules lazy-loaded** (`loadChildren`) con estrategia de
  precarga propia (`PreloadingStrategy` selectiva por ruta).
- Capa `core/` de singletons — servicios de API, interceptores, guards de
  ruta (autenticación, roles, cambios sin guardar), decoradores, validadores
  y pipes propios.
- Librería interna de **componentes compartidos** (inputs, dropdowns
  buscables, date/time pickers, subida y visor de ficheros, avatares,
  autocompletados, mapas, gráficas) reutilizada en todos los módulos para
  mantener UX y código consistentes.
- **Routing con guards** y módulos público/privado diferenciados (área de
  autenticación, shell principal, páginas públicas).

## Estado y datos

- **Estado reactivo con RxJS** — servicios singleton con `BehaviorSubject`
  (`list$`, `item$`, `loading$`) como única fuente de verdad, sin NgRx:
  patrón ligero y homogéneo en todas las plataformas.
- **Entidades tipadas con `class-transformer`** — decoradores declarativos
  (`@Expose`, `@Type` y decoradores propios como `@Default` o
  `@DateTransform`) que mapean automáticamente el modelo del backend
  (snake_case → camelCase, fechas a moment, valores por defecto).
- La capa de API **espeja el CQRS del backend**: lecturas (`/queries`) y
  comandos (`/commands`) separados sobre un `ApiService` común que
  deserializa las respuestas a entidades.
- **Autenticación JWT** — interceptor HTTP que inyecta el token, desenvuelve
  las respuestas y centraliza el manejo de errores por código de estado, con
  toasts traducidos (`ngx-toastr`) mapeando códigos de error de la API a
  claves i18n.
- **Estados de carga obligatorios** en toda acción mutadora: spinners y
  deshabilitado de controles desde que se dispara la petición hasta la
  respuesta, como convención de plataforma.

## UI y componentes

- **Angular Material 14** como base (tema propio, iconografía SVG registrada
  vía `MatIconRegistry`) y **DevExtreme** para grids y componentes de datos
  complejos.
- Visualización: **Chart.js** (gráficas), **FullCalendar** (calendarios),
  **Google Maps** (mapas con clustering de marcadores y geocoding),
  editor enriquecido **Summernote**, recorte de imágenes y emoji picker.
- **Formularios reactivos** complejos — `FormGroup`/`FormControl` con
  validadores propios, mensajes de error centralizados y traducidos, y
  diálogos reutilizables (confirmación, borrado, crop de imagen, vídeo,
  formularios de contacto) sobre `MatDialog`.
- **SCSS mantenible** — variables y utilidades globales (layout flex,
  colores, tipografía Inter), encapsulación estricta por componente con
  `:host`, overrides de Material controlados en hojas globales y diseño
  responsive con mixins (`media('mobile&tablet')`).

## Internacionalización

- **ngx-translate con 7 idiomas** (ca, de, en, es, fr, it, pt) en contenido y
  errores de API.
- **Tooling i18n propio**: las traducciones viven en Google Sheets y se
  sincronizan con scripts Node (`google-auth-library`, service account) — *pull*
  en CI para regenerar los JSON y *push* de claves nuevas desde un CSV en un
  hook de pre-commit, con deduplicación contra la Sheet y commits del bot en
  los pipelines.

## Calidad y tooling

- **ESLint + Prettier** con git hooks de pre-commit (lint + format de los
  ficheros staged), conventional commits y revisión por merge request.
- **Playwright** para verificación visual y de regresiones sobre la app real
  (flujos de login, rutas afectadas, consola limpia) como paso de validación
  de los cambios.
- Convenciones de plataforma documentadas y replicadas entre los proyectos
  hermanos (mismos patrones de servicios, entidades, estilos y módulos).

## CI/CD y despliegue

- **GitLab CI multi-stage** (translations → install → lint → build → push →
  deploy) con runners propios:
  - **Caché compartida de `node_modules`** con clave estática y *self-heal*
    por stamp del lockfile (sustituyendo artifacts pesados), `FF_USE_FASTZIP`
    y compresión rápida para recortar minutos de pipeline.
  - **`rules:` + `needs:`** — grafo de dependencias entre jobs (DAG) en lugar
    de stages secuenciales, pipelines interrumpibles y deduplicación de
    ejecuciones MR/rama.
  - Jobs auxiliares con caché propia mínima (p. ej. sincronización de
    traducciones sin instalar el árbol completo de dependencias).
- **Docker multi-stage** (build Node → imagen final **nginx alpine**) y
  despliegue a **Docker Swarm** por **SHA inmutable** de imagen (nunca tags
  flotantes), con scripts de deploy *fail-fast* y notificaciones a Slack.
- Diagnóstico y *hardening* de pipelines: análisis de fallos reales (OOM de
  BuildKit, conflictos de peer dependencies en npm, regeneración de
  lockfiles entre versiones de Node/npm) y políticas de retry acotadas.

## Etiquetas para la sección *skills*

`Angular` · `TypeScript` · `RxJS` · `Angular Material` · `DevExtreme` ·
`class-transformer` · `Reactive Forms` · `ngx-translate` · `i18n` ·
`Chart.js` · `FullCalendar` · `Google Maps API` · `SCSS` · `ngx-toastr` ·
`JWT` · `Lazy loading` · `Playwright` · `ESLint` · `Prettier` ·
`GitLab CI/CD` · `Docker` · `Docker Swarm` · `nginx` · `Google Sheets API`
