---
title: Guida operativa per agenti
created: 2026-10-06
updated: 2026-10-06
type: guidance
tags: [guidance, workflow, documentation, security]
project: bartender-school-mb
status: active
confidence: high
sources: [Agents.md, SCHEMA.md, package.json, angular.json]
---

# Guida operativa per agenti

Contratto operativo per task sicuri, piccoli, verificabili e riprendibili.

## 1. Preflight obbligatorio

Prima di modificare la repo:

1. Eseguire `git status`.
2. Se ci sono modifiche locali non committate, fermarsi e comunicarlo; non sovrascriverle.
3. Se il working tree è pulito, eseguire `git fetch` e `git pull --ff-only` sul branch corrente.
4. Se pull fallisce o i branch sono divergenti, non risolvere autonomamente: mostrare lo stato e attendere.
5. Lavorare su un branch `hermes/<task>`, mai direttamente su `main`.

Poi leggere `SCHEMA.md`, `index.md`, `current-status.md` e le ultime 20–30 righe di `log.md`. Cercare definizioni e usi dei simboli, quindi leggere sorgenti, configurazione e test pertinenti.

## 2. Contratto del task

Chiarire outcome, ambito, vincoli e acceptance check. Se l'esito è chiaro ma l'implementazione è aperta, scegliere la modifica minima e dichiarare l'assunzione. Chiedere chiarimenti solo quando interpretazioni diverse cambiano file o comportamento. Distinguere modifiche visuali, behavior-preserving e behavior-changing.

Le richieste sul repository sono operative per default: ispezionare, modificare e verificare invece di limitarsi alla spiegazione. Se manca evidenza runtime per una correzione sicura, usare solo log diagnostici mirati e identificabili oppure fermarsi; non introdurre comportamento speculativo.

## 3. Disciplina delle modifiche

- Toccare solo i file necessari; niente refactor estranei.
- Preservare stile Angular/TypeScript, componenti standalone e confini esistenti.
- Usare `camelCase` per variabili e metodi; preservare esattamente i contratti esterni.
- Dare a ogni nuovo child component una sottocartella propria.
- Dichiarare modificatori di accesso espliciti quando lo stile/framework lo consente.
- Cercare riuso prima di creare una funzione; mantenere un solo percorso canonico.
- Controllare `package.json` prima di aggiungere import o dipendenze.
- Non eseguire commit, push o riscritture della history salvo richiesta esplicita dell'utente.
- Non inserire credenziali, token, password, chiavi o endpoint privati nella wiki.

Se in futuro vengono introdotti realtime, subscription, dialog o servizi esterni, tracciare caller, effetti, transizioni e cleanup prima di modificare il lifecycle. Non mantenere vecchi e nuovi percorsi in parallelo.

## 4. Verifica

Eseguire prima il check più stretto, poi i gate pertinenti:

- `npm test -- --watch=false --browsers=ChromeHeadless`
- `npm run build`
- `npm start` e smoke test browser per modifiche UI o runtime

`npm run lint` non è disponibile in questo repository perché lo script non è dichiarato. Una build riuscita non prova il comportamento runtime, servizi esterni o deploy.

Riportare solo risultati osservati. Il report finale usa **Changed**, **Verified**, **Blocked/remaining** e nomina i rischi manuali o ambientali.

## 5. Manutenzione della wiki

Dopo una modifica sostanziale:

1. Aggiornare la pagina progetto, modulo o stato pertinente.
2. Riparare o aggiungere link utili.
3. Aggiornare `index.md` se cambiano pagine o categorie.
4. Aggiungere una voce concisa a `log.md` con evidenze.
5. Ridurre `confidence` o aggiungere una domanda aperta se la verifica è incompleta.

La guida durevole resta qui, i fatti nelle pagine specifiche, lo stato temporaneo in `current-status.md` e la storia in `log.md`.

## 6. Handoff

Prima di finire eseguire `git status --short --branch` e `git diff --check`. Separare modifiche dell'agente e modifiche preesistenti. Non dichiarare completato un artefatto finché acceptance check e rischi residui non sono espliciti.
