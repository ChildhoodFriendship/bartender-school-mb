---
title: Module — Application shell
created: 2026-09-29
updated: 2026-09-29
type: module
tags: [module, testing]
project: bartender-school-mb
status: active
confidence: high
sources: [src/app/app.component.ts, src/app/app.component.html, src/app/app.routes.ts, src/app/app.config.ts, src/app/app.component.spec.ts]
---

# Module — Application shell

## Responsibility

Fornisce il root component Angular, il placeholder visuale corrente e il punto di inserimento del router. Non contiene ancora moduli di dominio o integrazioni applicative.

## Public surface

- Root selector: `app-root`
- Root class: `AppComponent`
- Router outlet: presente nel template
- Route table: `routes: Routes = []`
- Title osservabile: `bartender-school-mb`

## Internal structure

| Component | Responsibility | Source |
|---|---|---|
| `AppComponent` | Stato minimo del titolo e metadata del component | `src/app/app.component.ts` |
| Template | Placeholder Angular, link esterni e router outlet | `src/app/app.component.html` |
| App config | Provider zone, router e hydration | `src/app/app.config.ts` |

## Runtime and data flow

1. `main.ts` avvia `AppComponent` con `appConfig`.
2. Il template rende il placeholder e il `router-outlet`.
3. Poiché la tabella route è vuota, nessuna route applicativa viene attivata.

## Dependencies and boundaries

- Internal: Angular Router e configurazione app.
- External: pacchetti Angular dichiarati in `package.json`.
- Data stores/integrations: nessuno verificato.

## Failure modes and diagnostics

- Se il component non compila, la build/test Angular falliscono.
- Se si aggiungono route, occorre aggiornare `app.routes.ts` e i test pertinenti.
- Verifica minima: `npm test -- --watch=false --browsers=ChromeHeadless`.

## Verification

- 3 spec eseguite con successo nella baseline del 2026-09-29.
- `npm run build` riuscito.
- Non verificati flussi di dominio perché non presenti.

## Related pages

- [[../projects/bartender-school-mb|project]]
- [[../architecture/system-architecture|architecture]]
- [[../runbooks/local-development|runbook]]

## Evidence

`src/app/app.component.ts`, `src/app/app.component.html`, `src/app/app.routes.ts`, `src/app/app.component.spec.ts`.
