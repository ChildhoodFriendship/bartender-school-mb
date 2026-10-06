# Schema della wiki

## Scopo

Knowledge base durevole e ricercabile per fatti verificati, architettura, componenti, workflow, stato e debugging del progetto.

## Convenzioni

- Nomi file minuscoli, con trattini e senza spazi.
- Ogni pagina di contenuto inizia con frontmatter YAML.
- Ogni pagina va aggiunta a `index.md`; ogni modifica sostanziale va registrata in `log.md`.
- Usare link Markdown relativi o `[[wikilinks]]` espliciti verso pagine esistenti.
- Aggiornare `updated` a ogni modifica.
- Preferire evidenze: sorgenti, configurazione, test, comandi e documentazione ufficiale.
- Non memorizzare segreti, token, password, chiavi private o credenziali.
- Tenere le pagine sotto circa 200 righe; dividere solo gli approfondimenti autonomi.
- Tenere note temporanee fuori dalle pagine durevoli, salvo che cambino la conoscenza del progetto.

## Frontmatter

```yaml
---
title: Titolo pagina
created: YYYY-MM-DD
updated: YYYY-MM-DD
type: project | module | architecture | api | decision | workflow | bug | runbook | guidance | status | policy
tags: [project, documentation]
project: bartender-school-mb
status: active | superseded | resolved | open | archived
confidence: high | medium | low
sources: [percorso/relativo, comando o URL]
---
```

## Confidenza

`confidence` misura la qualità dell'evidenza, non la certezza soggettiva dell'agente e non certifica il funzionamento in produzione.

- `high`: confermata da codice/configurazione corrente e, quando rilevante, da un comando riuscito.
- `medium`: supportata dal codice o dalla documentazione, ma runtime, servizi esterni o flusso completo non sono verificati.
- `low`: inferita, obsoleta, contraddittoria o dipendente da evidenza mancante; indicare come verificarla.

Usare il livello più basso applicabile all'affermazione importante più debole. Conservare le contraddizioni con entrambe le fonti.

## Regole delle pagine

Creare pagine per progetto, moduli importanti, integrazioni non ovvie, bug durevoli, procedure ripetibili, decisioni e stato. Non documentare dettagli banali già chiari dal codice. Distinguere sempre ciò che possiede il repository da librerie, servizi esterni, ambienti e artefatti generati.

## Manutenzione e precedenza

Quando si aggiorna una pagina: controllare indice e termini correlati, leggere sorgente/configurazione/test, aggiornare pagina e link, aggiornare indice, aggiungere una voce concisa al log e dichiarare i blocchi.

In caso di conflitto prevalgono: codice/configurazione corrente verificati; output di build/test/runtime; documentazione esplicita; wiki; inferenze, sempre marcate.
