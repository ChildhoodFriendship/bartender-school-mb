---
title: Token usage — Efficient agent workflow
created: 2026-09-29
updated: 2026-09-29
type: policy
tags: [guidance, workflow, performance]
project: bartender-school-mb
status: active
confidence: high
sources: [SCHEMA.md, agent-guide.md, index.md, package.json]
---

# Token usage — Efficient agent workflow

Spend context on the smallest evidence set that can support a correct change; non leggere l'intero repository senza necessità.

## Orientamento

1. `SCHEMA.md`
2. `index.md`
3. `current-status.md`
4. ultime 20–30 righe di `log.md`
5. `git status --short --branch`

Poi scegli una o due pagine pertinenti e i simboli sorgente che citano. Non includere `node_modules` o output generati.

## Investigazione

- Cerca simboli, route, endpoint o componenti prima di aprire file estesi.
- Leggi intervalli limitati e traccia definizione → chiamanti → tipi/contratti.
- Interrompi la lettura quando comportamento e criterio di accettazione sono chiari.
- Raggruppa ricerche e letture indipendenti nello stesso turno.
- Usa riepiloghi programmatici per inventari ripetitivi.
- Scrivi nella wiki le scoperte durevoli con il percorso sorgente.
- Non incollare segreti o grandi file generati.

## Dimensione del compito

| Compito | Leggi prima | Ferma la lettura quando |
|---|---|---|
| Fix piccolo | stato, indice, file target, chiamanti diretti | causa e verifica sono note |
| Modifica modulo | stato, pagina modulo, file e test | confine e flusso dati sono chiari |
| Modifica trasversale | stato, architettura, simboli coinvolti | ogni confine ha un'accettazione |
| Audit ampio | stato, pagine, ricerche mirate, inventario | il risultato è una tabella con evidenze |

## Sprechi da evitare

Non rileggere `package.json` dopo aver risolto la domanda sulle dipendenze; non leggere `dist/` per capire il sorgente; non cercare simboli applicativi in `node_modules`; non aprire ogni modulo per un task locale; non ripetere una patch fallita senza rileggere il file; non dedurre runtime da una build soltanto.

## Completamento efficiente

Un agente è terminato quando la modifica minima è applicata, la verifica pertinente è stata eseguita, la conoscenza durevole è registrata e il prossimo agente può trovare le evidenze dall'[[index.md|indice]].
