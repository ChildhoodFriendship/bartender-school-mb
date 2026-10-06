---
title: Progetto bartender-school-mb
created: 2026-10-06
updated: 2026-10-06
type: project
tags: [project, integration, deployment]
project: bartender-school-mb
status: active
confidence: high
sources: [package.json, angular.json, README.md, src/main.ts, src/main.server.ts, src/server.ts, src/app]
---

# bartender-school-mb

## Scopo

Landing page in italiano per una scuola di bartending: hero, corsi, metodo, testimonianza, contatto e footer. Il repository contiene una singola applicazione Angular, non un backend di dominio.

## Repository e comandi

- Package: `bartender-school-mb@0.0.0`.
- Sorgente: `src`; configurazione in `angular.json`.
- Browser entry: `src/main.ts`.
- Server entry: `src/server.ts`; bootstrap SSR in `src/main.server.ts`.
- Root component: `src/app/app.component.ts`; sezioni in `src/app/components/`.
- Routing: `src/app/app.routes.ts`, tabella vuota.
- Sviluppo: `npm start` oppure `ng serve`.
- Test: `npm test -- --watch=false --browsers=ChromeHeadless`.
- Build: `npm run build`.
- SSR: `npm run serve:ssr:bartender-school-mb` dopo la build.

## Forma del sistema

Angular standalone con rendering browser, SSR e prerender. `appConfig` abilita zone event coalescing, router e client hydration con event replay. Express serve gli asset browser e passa le richieste restanti a `CommonEngine`. Il server usa `PORT`, con fallback `4000`.

## Sviluppo locale

Installare le dipendenze con `npm install`, avviare `npm start` e aprire `http://localhost:4200/`. Eseguire i test headless e la build prima dell'handoff. Per cambi UI eseguire anche uno smoke test browser. Non esistono procedure di deployment o rollback nel repository.

## Integrazioni e limiti

- Il form contatti usa `fetch` verso Formspree solo dopo la sostituzione dell'ID placeholder.
- Immagini e alcuni contenuti sono dimostrativi e caricati da URL Unsplash.
- Non sono presenti autenticazione, datastore o API applicative.
- `npm run lint` non è disponibile: lo script non è dichiarato.

Pagine correlate: [stato corrente](../current-status.md), [catalogo componenti](../modules/component-catalog.md), [guida agenti](../agent-guide.md).
