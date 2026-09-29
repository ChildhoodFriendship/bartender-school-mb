---
title: Module — SSR server
created: 2026-09-29
updated: 2026-09-29
type: module
tags: [module, deployment, integration]
project: bartender-school-mb
status: active
confidence: high
sources: [src/server.ts, src/main.server.ts, src/app/app.config.server.ts, angular.json, package.json]
---

# Module — SSR server

## Responsibility

Avvia il bootstrap server-side Angular, serve gli asset browser generati e renderizza le richieste tramite Express `CommonEngine`.

## Public surface

- Server entry point: `src/server.ts`
- SSR bootstrap: `src/main.server.ts`
- Runtime command: `npm run serve:ssr:bartender-school-mb`
- Port configuration: `PORT`, fallback `4000`

## Internal structure

| Component | Responsibility | Source |
|---|---|---|
| Express app | Gestisce static assets e fallback SSR | `src/server.ts` |
| `CommonEngine` | Renderizza l'app Angular lato server | `src/server.ts` |
| Bootstrap function | Chiama `bootstrapApplication` con contesto SSR | `src/main.server.ts` |
| Server config | Fornisce la configurazione Angular server | `src/app/app.config.server.ts` |

## Runtime and data flow

1. La build produce `dist/bartender-school-mb/browser` e bundle server.
2. Express prova prima a servire file statici con cache `1y`.
3. Le richieste restanti vengono renderizzate con `CommonEngine` e inviate come HTML.
4. Se il modulo è main, il server ascolta `PORT` o `4000`.

## Dependencies and boundaries

- Internal: `AppComponent` e bootstrap server Angular.
- External: Express, `@angular/ssr/node`, runtime Node.js.
- Data stores/API: nessuno definito.

## Failure modes and diagnostics

- Avvio senza build: directory browser/server assente.
- Porta occupata: `app.listen` non può avviarsi.
- Errore di rendering: la promise di `CommonEngine.render` passa l'errore a `next`.

## Verification

- `npm run build` riuscito; bundle server generato e una route statica prerenderizzata.
- Avvio manuale del server e comportamento su rete non verificati in questa baseline.

## Related pages

- [[../projects/bartender-school-mb|project]]
- [[../architecture/system-architecture|architecture]]
- [[../runbooks/local-development|runbook]]

## Evidence

`src/server.ts`, `src/main.server.ts`, `angular.json`, `package.json`.
