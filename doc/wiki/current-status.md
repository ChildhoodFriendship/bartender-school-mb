---
title: Stato corrente
updated: 2026-10-06
type: status
status: active
confidence: high
sources: [package.json, angular.json, src/app/app.component.ts, src/app/app.component.spec.ts, src/server.ts, src/app/components/contact-section/contact-section.component.ts]
---

# Stato corrente

## Snapshot verificato

| Area | Stato |
|---|---|
| Progetto | Landing page Angular standalone `bartender-school-mb` |
| Framework | Angular 19.2; TypeScript 5.7; RxJS 7.8 |
| Rendering | Browser, SSR e prerender configurati |
| Server | Express con `CommonEngine`; `PORT` oppure `4000` |
| Test | Karma/Jasmine; due spec nel test del root component |
| Routing | `Routes = []` |
| Integrazione | Formspree con endpoint placeholder |

La landing compone header, hero, corsi, metodo/about, testimonianze, contatto e footer. Le immagini sono URL Unsplash temporanei.

## Verifiche della migrazione

- La struttura richiesta è stata ricostruita sotto `doc/wiki/`.
- I comandi di progetto non sono stati rieseguiti durante questa migrazione documentale.
- Non risultano script `lint` in `package.json`.

## Limiti e punti aperti

- Sostituire immagini e copy dimostrativi con asset e contenuti approvati.
- Configurare l'ID reale al posto di `REPLACE_WITH_FORMSPREE_ID` in `contact-section.component.ts`.
- Non sono verificati deploy remoto, dominio, endpoint Formspree reale o smoke test browser.
- Aggiungere route, servizi e contratti dati solo quando richiesti dal prodotto.
