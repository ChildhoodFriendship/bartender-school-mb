---
title: BartenderSchoolMb
created: 2026-09-29
updated: 2026-09-29
type: project
tags: [project, dependency, testing]
project: bartender-school-mb
status: active
confidence: high
sources: [package.json, angular.json, README.md, src/main.ts, src/main.server.ts, src/server.ts, src/app/app.component.ts]
---

# BartenderSchoolMb

## Purpose

Il repository contiene una landing page web Angular per una scuola di bartending, con presentazione dei corsi, metodo didattico, testimonianza e call to action di contatto.

## Repository

- Repository: repository locale corrente
- Main branch: `master`
- Build: `npm run build`
- Test: `npm test`
- Run: `npm start` oppure `ng serve`
- Produzione SSR: `npm run serve:ssr:bartender-school-mb` dopo la build

## System shape

- Browser entry point: `src/main.ts`
- Server entry point: `src/server.ts`, bootstrap in `src/main.server.ts`
- Root component: `src/app/app.component.ts`
- Section components: `src/app/components/`
- Routes: `src/app/app.routes.ts`, senza route aggiuntive perché la landing è composta direttamente dal root component
- Configurazione: `src/app/app.config.ts` e `src/app/app.config.server.ts`
- Architettura: [[../architecture/system-architecture|system architecture]]
- Moduli: [[../modules/application-shell|application shell]], [[../modules/ssr-server|SSR server]]
- Integrazioni/data store: Formspree per il form contatti, con ID da configurare; le immagini sono URL temporanei Unsplash

## Local development

1. Usare Node/npm compatibili con il lockfile e installare le dipendenze con `npm install`.
2. Avviare `npm start`.
3. Aprire `http://localhost:4200/`.
4. Eseguire `npm test` per i test Karma/Jasmine.
5. Eseguire `npm run build` per la build browser/server e il prerender.

## Deployment and operations

Non sono presenti procedure di deployment, ambienti remoti, health check o rollback nel repository. La sola procedura operativa verificabile è [[../runbooks/local-development|sviluppo locale e verifica]].

## Known constraints

- Le route applicative non sono ancora definite.
- Il contenuto e le immagini sono una prima base dimostrativa.
- Non esiste uno script `lint` in `package.json`.
- Il server SSR usa la variabile `PORT` se presente, altrimenti la porta `4000`.

## Open questions

- Quale dominio e quali flussi dovranno sostituire il placeholder?
- Quali route, servizi e contratti dati saranno introdotti?
- Quale target di deployment dovrà essere supportato?

## Evidence

- Source: `src/main.ts`, `src/main.server.ts`, `src/server.ts`, `src/app/`
- Config: `package.json`, `angular.json`, `tsconfig*.json`
- Tests: `src/app/app.component.spec.ts`
