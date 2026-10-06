---
title: Stato corrente
created: 2026-10-06
updated: 2026-10-06
type: status
tags: [status, project, testing]
project: bartender-school-mb
status: active
confidence: high
sources: [package.json, angular.json, src/app/app.component.ts, src/app/app.component.spec.ts, src/server.ts, src/app/components/contact-section/contact-section.component.ts]
---

# Stato corrente

> Snapshot documentale del 2026-10-06. Descrive evidenze del repository, non una certificazione di release.

## Snapshot del repository

| Voce | Valore osservato |
|---|---|
| Applicazione | Landing page Angular standalone `bartender-school-mb` |
| Framework | Angular 19.2, TypeScript 5.7, RxJS 7.8 |
| Rendering | Browser, SSR e prerender configurati in `angular.json` |
| Server | Express con Angular `CommonEngine`; `PORT` oppure `4000` |
| Routing | `Routes = []` |
| Test | Karma/Jasmine; due spec del root component |
| Integrazione | Formspree con endpoint placeholder |

La shell compone header, hero, corsi, metodo/about, testimonianze, contatto e footer. Le immagini sono URL Unsplash temporanei.

## Verifica della baseline

La configurazione del progetto dichiara `npm test` e `npm run build`; questa migrazione riguarda soltanto documentazione e non riesegue i gate applicativi. Non esiste uno script `lint` in `package.json`.

## Limiti e lacune

- Sostituire immagini e copy dimostrativi con asset e contenuti approvati.
- Configurare l'ID reale al posto di `REPLACE_WITH_FORMSPREE_ID` nel componente contatti.
- Non sono verificati deploy remoto, dominio, endpoint Formspree reale o smoke test browser.
- Non sono presenti datastore, API applicative, autenticazione o procedure di deploy nel repository.
- Aggiungere route, servizi e contratti dati solo quando richiesti dal prodotto.

## Prossimi passi osservabili

1. Approvare asset e contenuti pubblici.
2. Configurare e verificare il form Formspree.
3. Eseguire test headless, build e smoke test dopo modifiche di comportamento.
