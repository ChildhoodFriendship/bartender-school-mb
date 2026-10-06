---
title: Progetto bartender-school-mb
updated: 2026-10-06
type: project
status: active
confidence: high
sources: [package.json, angular.json, README.md, src/main.ts, src/main.server.ts, src/server.ts, src/app]
---

# bartender-school-mb

## Scopo

Landing page in italiano per una scuola di bartending: hero, corsi, metodo, testimonianza, contatto e footer. Il repository contiene una singola applicazione Angular, non un backend di dominio.

## Configurazione

- Package: `bartender-school-mb@0.0.0`.
- Sorgente: `src`; configurazione Angular in `angular.json`.
- Browser entry: `src/main.ts`; server entry: `src/server.ts` con bootstrap in `src/main.server.ts`.
- Root component: `src/app/app.component.ts`; componenti riusabili in `src/app/components/`.
- Routing: `src/app/app.routes.ts`, tabella vuota.
- Build: output `dist/bartender-school-mb`, SSR e prerender abilitati.

## Comandi

```bash
npm install
npm start
npm test -- --watch=false --browsers=ChromeHeadless
npm run build
npm run serve:ssr:bartender-school-mb
```

L'app dev server è attesa su `http://localhost:4200/`. Il server SSR richiede una build e usa `PORT`, altrimenti `4000`.

## Integrazioni e vincoli

- Il form contatti invia con `fetch` a Formspree solo dopo la sostituzione dell'ID placeholder.
- Immagini e alcuni contenuti sono dimostrativi e caricati da URL Unsplash.
- Non sono presenti autenticazione, datastore, API applicative, procedure di deploy o rollback.
- `npm run lint` non è disponibile perché lo script non è dichiarato.

## Evidenze e stato

La forma del sistema è descritta in [SCHEMA](../SCHEMA.md); il catalogo è in [component-catalog](../modules/component-catalog.md). Per lacune e verifiche aperte usare [current-status](../current-status.md).
