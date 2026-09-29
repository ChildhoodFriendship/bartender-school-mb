---
title: System architecture — BartenderSchoolMb
created: 2026-09-29
updated: 2026-09-29
type: architecture
tags: [architecture, deployment, security]
project: bartender-school-mb
status: active
confidence: high
sources: [angular.json, src/main.ts, src/main.server.ts, src/server.ts, src/app/app.config.ts, src/app/app.config.server.ts, src/app/app.routes.ts]
---

# System architecture — BartenderSchoolMb

## Context

Applicazione Angular standalone con rendering browser e server-side rendering/prerender configurati dal progetto Angular CLI.

## Components

| Component | Responsibility | Technology | Links |
|---|---|---|---|
| Browser bootstrap | Avvia `AppComponent` con `appConfig` | Angular 19, TypeScript | [[../modules/application-shell|application shell]] |
| Application shell | Renderizza il root component e il `router-outlet` | Angular standalone | [[../modules/application-shell|application shell]] |
| Router/config | Registra provider router e hydration | Angular Router, platform-browser | `src/app/app.config.ts` |
| SSR bootstrap | Bootstrap server-side del componente | Angular SSR | [[../modules/ssr-server|SSR server]] |
| HTTP server | Serve asset browser e renderizza richieste | Express, `CommonEngine` | [[../modules/ssr-server|SSR server]] |

## Runtime flow

1. `src/main.ts` chiama `bootstrapApplication(AppComponent, appConfig)` nel browser.
2. `appConfig` abilita zone event coalescing, router e client hydration con event replay.
3. Per SSR, `src/server.ts` serve i file statici da `dist/.../browser` e passa le altre richieste a `CommonEngine` con il bootstrap server.
4. La build Angular abilita `prerender: true` e usa `src/server.ts` come entry server.

## Data and control boundaries

- Il repository possiede bootstrap, configurazione Angular, shell, routing vuoto e server Express.
- Le dipendenze npm sono confini esterni; il codice corrente non definisce API applicative o datastore.
- `PORT` è l'unica configurazione runtime esplicitamente letta dal server.

## Failure modes

- Build non eseguita: gli artefatti browser/server richiesti dal server non esistono.
- Route o provider futuri non registrati: il router non espone pagine applicative.
- Porta occupata o `PORT` non valido: l'avvio del server può fallire; non esiste un gestore custom documentato.

## Security boundaries

- Express serve file generati dalla directory browser configurata.
- Non sono presenti autenticazione, autorizzazione, segreti o endpoint applicativi nel codice ispezionato.
- Non dedurre proprietà di sicurezza di produzione dal solo template SSR.

## Related pages

- [[../projects/bartender-school-mb|project page]]
- [[../modules/application-shell|application shell]]
- [[../modules/ssr-server|SSR server]]
- [[../runbooks/local-development|local runbook]]

## Evidence

`angular.json`, `src/main.ts`, `src/main.server.ts`, `src/server.ts`, `src/app/app.config.ts`.
