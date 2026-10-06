---
title: Guida operativa per agenti
updated: 2026-10-06
type: guidance
status: active
confidence: high
sources: [Agents.md, package.json, angular.json, SCHEMA.md]
---

# Guida operativa per agenti

## Prima di modificare

1. Leggere `SCHEMA.md`, `index.md`, `current-status.md` e le ultime 20–30 righe di `log.md`.
2. Eseguire `git status --short --branch` e trattare il diff preesistente come del maintainer.
3. Cercare definizione e usi del simbolo prima di editarlo; leggere configurazione e test pertinenti.
4. Chiarire outcome, ambito, vincoli e criterio di accettazione. Se l'esito è chiaro ma l'implementazione è aperta, scegliere la modifica minima.

## Regole di modifica

- Toccare solo i file necessari; niente refactor estranei.
- Non fare commit, push, reset distruttivi o riscritture della history senza richiesta esplicita.
- Non sovrascrivere modifiche locali.
- Preservare stile Angular/TypeScript, componenti standalone e `ChangeDetectionStrategy.OnPush`.
- Usare `camelCase` per variabili e metodi; cercare riuso prima di creare nuove funzioni.
- Ogni nuovo componente va in una sottocartella propria con template e stile coerenti.
- Controllare `package.json` prima di aggiungere import o dipendenze.
- Non introdurre dati, endpoint, claim o proprietà di servizi esterni non verificati.
- Non documentare né inserire segreti, token, password, chiavi o endpoint privati.

## Verifica

Eseguire il check più stretto, poi i gate pertinenti:

- `npm test -- --watch=false --browsers=ChromeHeadless`
- `npm run build`
- `npm start` e smoke test browser quando cambia la UI

Non dichiarare lint riuscito: `package.json` non contiene uno script `lint`. La build non prova da sola il comportamento runtime né un deploy remoto.

## Manutenzione wiki

Dopo una modifica sostanziale aggiornare pagina pertinente, `index.md` se cambia l'inventario e `log.md` con evidenze concise. Ridurre la confidenza o annotare una lacuna quando la verifica è incompleta. Fatti temporanei vanno in `current-status.md`; regole durevoli qui; storia in `log.md`.

## Integrazioni future

Prima di introdurre realtime, dialog, persistenza o servizi esterni tracciare caller, effetti e contratti. Mantenere un solo lifecycle path, gestire cleanup e transizioni esplicitamente e verificare i confini senza assumere proprietà del servizio.

## Chiusura

Eseguire `git diff --check` e `git status --short --branch`. Il report deve separare **Changed**, **Verified** e **Blocked/remaining**, citando risultati realmente osservati e rischi residui.
