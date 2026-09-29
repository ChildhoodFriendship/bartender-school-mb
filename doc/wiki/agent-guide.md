---
title: Agents — Working guide
created: 2026-09-29
updated: 2026-09-29
type: guidance
tags: [guidance, workflow, documentation, security]
project: bartender-school-mb
status: active
confidence: high
sources: [SCHEMA.md, current-status.md, token-usage.md, package.json, angular.json]
---

# Agents — Working guide

Contratto operativo per agenti che lavorano in `bartender-school-mb`. Ogni task deve essere piccolo, sicuro, verificabile e riprendibile.

## 1. Orientarsi prima di agire

1. Leggere [[SCHEMA.md|schema]], [[index.md|indice]], [[current-status.md|stato]] e ultime 20–30 righe di [[log.md|log]].
2. Eseguire `git status --short --branch`.
3. Cercare simboli e usi prima di modificare.
4. Leggere sorgente, configurazione e test pertinenti.
5. Trattare il diff preesistente come del maintainer.

## 1b. Eseguire per default

Una richiesta sul repository è operativa salvo richiesta esplicita di sola discussione. Ispezionare il codice, applicare il cambiamento minimo e verificarlo.

Se manca un'evidenza runtime necessaria, aggiungere solo log diagnostici focalizzati e marcati, oppure chiedere l'output di quei log. Non introdurre comportamento speculativo per simulare una soluzione.

## 1c. Contratto del prompt

Prima di editare chiarire: outcome, scope, vincoli e acceptance check. Se l'implementazione è aperta ma l'outcome è chiaro, scegliere la soluzione minima e dichiarare l'assunzione. Chiedere solo quando interpretazioni diverse cambiano file o comportamento. Distinguere modifiche visuali, behavior-preserving e behavior-changing.

## 2. Precedenza delle fonti

1. Sorgente/configurazione corrente verificata dall'esecuzione.
2. Build, test e prove runtime.
3. Documentazione esplicita.
4. Wiki con confidenza `medium`/`low`.
5. Inferenza, mai presentata come fatto.

La presenza di un file o di una dipendenza prova l'esistenza del codice, non il funzionamento di un flusso completo, di un servizio o di un deploy.

## 3. Disciplina delle modifiche

- Toccare solo i file necessari.
- Preservare stile Angular/TypeScript e confini esistenti.
- Non fare refactor ampi durante un fix mirato.
- Non sovrascrivere modifiche locali, fare reset, commit, push o riscrivere la history senza richiesta esplicita.
- Ispezionare il diff di un file dirty prima di editarlo.
- Non inserire credenziali, token, password, chiavi o endpoint privati nella wiki.
- Controllare `package.json` prima di aggiungere import o dipendenze.

## 4. Verifica

Eseguire prima il check più stretto, poi i gate del progetto:

- `npm test -- --watch=false --browsers=ChromeHeadless`
- `npm run build`
- `npm start` e smoke test browser quando cambia il comportamento UI

Non dichiarare un lint riuscito: `package.json` non definisce uno script `lint`. La build da sola non prova il comportamento runtime.

Il report finale contiene solo **Changed**, **Verified**, **Blocked/remaining**, con risultati realmente osservati.

## 4b. Organizzazione del codice

- Usare `camelCase` per variabili/metodi frontend; preservare eventuali chiavi esterne esatte con mapping esplicito.
- Preferire nomi di data flow chiari come `loadData()`, `refreshData()`, `parseResponse()` e `buildPayload()`.
- Dichiarare modificatori di accesso espliciti quando lo stile/framework lo consente.
- Mettere ogni nuovo child component in una sottocartella propria.
- Mantenere import, indentazione, template e formattazione coerenti.
- Aggiungere commenti concisi solo quando il nome non spiega abbastanza.
- Prima di creare una funzione cercare se esiste già lo stesso comportamento; mantenere un solo percorso canonico.

## 4c. Integrazioni e lifecycle future

Se verranno introdotti realtime, subscription, dialog, salvataggi o servizi esterni, tracciare tutti i caller e gli effetti prima di cambiare una funzione. Costruire un solo lifecycle path, gestire esplicitamente cleanup e transizioni, e non mantenere vecchi e nuovi percorsi in parallelo. Per ogni integrazione documentare confini, contratti e verifiche senza inventare proprietà del servizio esterno.

## 5. Manutenzione wiki

Dopo una modifica sostanziale:

1. Aggiornare la pagina progetto/architettura/modulo/runbook/stato pertinente.
2. Aggiungere wikilink utili.
3. Aggiornare `index.md` se cambiano pagine o categorie.
4. Aggiungere una voce concisa a `log.md` con evidenze.
5. Ridurre la confidenza o annotare una domanda aperta se la verifica è incompleta.

Mettere guida durevole qui, fatti nelle pagine specifiche, stato temporaneo in `current-status.md` e storia in `log.md`.

## 5b. Handoff

Prima di finire eseguire `git status --short --branch` e `git diff --check`. Separare nel report file modificati dall'agente e file già dirty. Lasciare modifiche non committate salvo richiesta. Un handoff è completo solo quando esiste l'artefatto, i check sono eseguiti e i rischi residui sono nominati.

## 6. Formato handoff

- **Scope:** file e comportamento toccati.
- **Evidence:** comandi, test o percorsi sorgente.
- **Current state:** done, blocked o partially verified.
- **Remaining risk:** dipendenze runtime, browser, permessi o backend.
- **Next action:** un passo concreto.

Related pages: [[current-status|current status]], [[token-usage|token usage]] e [[index|index]].
