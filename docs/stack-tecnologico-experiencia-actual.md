# Stack tecnológico — experiencia profesional actual

> Material de contenido para el portfolio (sección *skills* / *experience* de
> `src/app/resume.data.ts`). Derivado del trabajo diario en plataformas web
> full-stack con backend de microservicios: varias plataformas paralelas que
> comparten la misma arquitectura, por lo que cada patrón se diseña una vez y
> se replica y mantiene en todas ellas.

## Resumen

Desarrollo full-stack de plataformas web sobre una arquitectura de
**microservicios CQRS orientada a eventos**: backend Node.js/TypeScript con
mensajería Kafka y PostgreSQL, frontend Angular, y despliegue containerizado
en Docker Swarm con CI/CD completo en GitLab. Responsable de todo el ciclo:
diseño de endpoints y modelos, migraciones de base de datos, testing de
integración, pipelines de CI/CD y despliegue a producción.

## Backend

- **Node.js 22 + TypeScript 5 (strict mode)** — monorepo con **yarn
  workspaces**: paquetes compartidos (`common`, `core`, `db`) y servicios
  independientes (`auth`, `commands`, `queries`, `notify`).
- **Arquitectura CQRS** — separación de APIs de escritura (*commands*) y
  lectura (*queries*), con eventos de dominio publicados en **Apache Kafka**
  (`node-rdkafka`) para sincronizar servicios y disparar efectos asíncronos.
- **Express** como capa HTTP, con `helmet`, `cors` y validación de payloads
  declarativa mediante `class-validator` / `class-transformer`.
- **Autenticación y autorización** — JWT (`express-jwt`, `jsonwebtoken`),
  sesiones y **Passport** con estrategias OAuth2 (LinkedIn, Microsoft) y
  local con `bcrypt`.
- **Programación funcional** con **Ramda** en la capa de dominio y
  repositorios.
- **Tiempo real y notificaciones** — servicio dedicado que consume eventos
  Kafka: presencia con **Socket.IO** y emails transaccionales con
  **Nodemailer**.
- **Integraciones** — Google Cloud Storage (`@google-cloud/storage`,
  `googleapis`) para ficheros, **Redis** como soporte de caché/colas, LMS
  **Moodle** (MariaDB) y microservicio de chat embebido.

## Base de datos

- **PostgreSQL 16 + TypeORM** — modelado de entidades, repositorios con
  transacciones y manejo de errores centralizado (jerarquía propia de errores
  mapeada a códigos HTTP).
- **Migraciones versionadas** con TypeORM, organizadas por módulo de dominio
  y verificadas en CI con una suite que aplica **forward y rollback** de cada
  migración contra un Postgres real.
- Seeds reproducibles y scripts de backup/restore containerizados.

## Frontend

- **Angular 14** (plataformas profesionales) — servicios de estado con RxJS
  (`BehaviorSubject`), entidades tipadas con `class-transformer`, separación
  de la API en lecturas y comandos espejando el CQRS del backend.
- **Angular 21 + SSR/prerender** (este portfolio) — standalone components,
  signals, hydration y despliegue estático en GitHub Pages.

## DevOps y CI/CD

- **Docker + Docker Swarm** — stack completo de desarrollo y producción
  (servicios de aplicación, Kafka, PostgreSQL, Redis, Moodle, chat, proxy
  nginx) gestionado con tooling propio en shell.
- **GitLab CI/CD** — pipeline multi-stage (lint → install → build → test →
  push → deploy) con runners propios:
  - Tests de integración con **Postgres como service container** del job.
  - Caché compartida de `node_modules` con clave estática y *self-heal*
    (sustituyendo artifacts pesados), `FF_USE_FASTZIP` y compresión rápida
    para recortar minutos de pipeline.
  - `rules:` + `interruptible` para cancelar pipelines obsoletos y deduplicar
    ejecuciones de MR y rama.
  - Despliegue por **SHA inmutable** de imagen (nunca tags flotantes) con
    migraciones de BD ejecutadas como paso previo *fail-fast*: si la
    migración falla, el deploy se aborta.
- **Entrega continua** a entornos de test y producción vía SSH + `docker
  stack deploy`, con notificaciones a Slack.
- **Hardening de pipelines** — auditoría de deploys (fail-fast con `set -e`,
  higiene de ficheros `.env` multi-parser, eliminación de overrides de
  compose rotos) replicada en varias plataformas hermanas.

## Testing y calidad

- **AVA** como runner: tests de integración de API end-to-end contra base de
  datos real en contenedor, suites independientes y paralelizables en *lanes*
  aisladas de Docker Compose.
- Tests de migraciones (aplicar + revertir) obligatorios para cada cambio de
  esquema.
- **ESLint 9 (flat config) + Prettier**, git hooks de pre-commit, conventional
  commits y revisión por merge request.

## Etiquetas para la sección *skills*

`Node.js` · `TypeScript` · `Express` · `CQRS` · `Apache Kafka` ·
`PostgreSQL` · `TypeORM` · `Redis` · `Socket.IO` · `OAuth2 / Passport` ·
`JWT` · `Ramda` · `Angular` · `RxJS` · `SSR` · `Docker` · `Docker Swarm` ·
`GitLab CI/CD` · `nginx` · `Google Cloud Storage` · `AVA` · `ESLint` ·
`yarn workspaces` · `Moodle`
