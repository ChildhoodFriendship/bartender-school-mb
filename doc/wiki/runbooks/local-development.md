---
title: Runbook — Local development and verification
created: 2026-09-29
updated: 2026-09-29
type: runbook
tags: [runbook, workflow, testing]
project: bartender-school-mb
status: active
confidence: high
sources: [package.json, README.md, angular.json]
---

# Runbook — Local development and verification

## When to use

Per avviare l'applicazione localmente o verificare una modifica Angular/SSR.

## Preconditions

- Access: repository locale.
- Tools: Node.js/npm, dipendenze installate, ChromeHeadless disponibile per i test.
- Safety checks: eseguire `git status --short --branch`; non sovrascrivere modifiche preesistenti.

## Procedure

1. Installare le dipendenze con `npm install` se necessario.
2. Avviare il dev server con `npm start` oppure `ng serve`.
3. Aprire `http://localhost:4200/`.
4. Eseguire i test headless: `npm test -- --watch=false --browsers=ChromeHeadless`.
5. Eseguire la build: `npm run build`.
6. Per provare l'artefatto SSR, eseguire `npm run serve:ssr:bartender-school-mb` dopo la build; il server usa `PORT` oppure `4000`.

## Verification

La baseline del 2026-09-29 ha prodotto 3 test passati, build browser/server riuscita e una route prerenderizzata. Non è stato verificato un deploy remoto.

## Rollback / recovery

Non esiste una procedura di rollback applicativo nel repository. Per una modifica locale fallita, conservare il diff, correggere la causa e ripetere i check; non usare reset distruttivi su modifiche del maintainer.

## Troubleshooting

- `npm run lint` non è disponibile: lo script non è definito in `package.json`.
- Se il test non trova ChromeHeadless, correggere l'ambiente di test senza alterare il codice per mascherare il problema.
- Se SSR fallisce dopo la build, controllare gli artefatti in `dist/bartender-school-mb` e la variabile `PORT`.

## Related pages

- [[../projects/bartender-school-mb|project]]
- [[../architecture/system-architecture|architecture]]
- [[../current-status|current status]]
