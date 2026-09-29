---
title: Current status — BartenderSchoolMb
created: 2026-09-29
updated: 2026-09-29
type: query
tags: [status, project, testing]
project: bartender-school-mb
status: active
confidence: high
sources: [package.json, angular.json, src/app/app.component.ts, src/app/app.routes.ts, src/server.ts, src/app/app.component.spec.ts]
---

# Current status — BartenderSchoolMb

> Snapshot del 2026-09-29. Descrive evidenze del repository, non una certificazione di release.

## Snapshot del repository

| Voce | Valore osservato |
|---|---|
| Branch | `master` |
| HEAD | `5407ac8` (`initialize projects`) |
| Relazione remote | `master` allineato a `origin/master` al momento dell'ispezione |
| Working tree | Pulito prima della migrazione |
| Package | `bartender-school-mb@0.0.0` |
| Framework | Angular `^19.2.0`, CLI/build `^19.2.27` |
| Runtime server | Angular SSR con Express `^4.18.2` |
| Test | Karma/Jasmine, 2 spec eseguite con successo |

## Stato verificato

- Il repository contiene una landing page Angular standalone per The Pour Academy, con sezioni hero, corsi, metodo, testimonianze, contatti e footer.
- Il componente root compone componenti standalone separati per ogni sezione principale.
- La configurazione abilita strict TypeScript, hydration client con event replay e prerender/SSR.
- Il server Express serve gli artefatti browser e usa `CommonEngine` per il rendering delle richieste rimanenti.
- Le immagini della landing sono temporanee e caricate da URL Unsplash; il contatto passa da un form Formspree con endpoint da configurare.

## Verifica

| Check | Risultato | Evidenza |
|---|---|---|
| `npm test -- --watch=false --browsers=ChromeHeadless` | **Pass** | 2 spec Jasmine eseguite con successo in ChromeHeadless. |
| `npm run build` | **Pass** | Bundle browser/server generati e una route statica prerenderizzata. |
| `npm run lint` | Non disponibile | Nessuno script `lint` dichiarato in `package.json`. |

## Limiti e lacune

- Le immagini utilizzate sono placeholder esterni e dovranno essere sostituite con asset definitivi.
- Il form di contatto usa Formspree con un placeholder per l'ID reale.
- Non è verificato un deploy reale o un host esterno.

## Prossimi passi osservabili

1. Sostituire immagini e copy dimostrativi con contenuti approvati.
2. Inserire l'ID reale del form Formspree in `src/app/components/contact-section/contact-section.component.ts`.
3. Aggiungere route e pagine dedicate quando il prodotto lo richiederà.

Related pages: [[projects/bartender-school-mb|progetto]], [[architecture/system-architecture|architettura]], [[agent-guide|guida agenti]], [[runbooks/local-development|sviluppo locale]].
