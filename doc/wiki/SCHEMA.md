# Coding Project Wiki Schema

## Scopo

Knowledge base durevole e ricercabile per fatti verificati, architettura, moduli/API, contratti, decisioni, workflow, procedure operative e debugging.

## Convenzioni

- Nomi file minuscoli, separati da trattini, senza spazi.
- Ogni pagina di contenuto inizia con frontmatter YAML ed è elencata in `index.md`.
- Usa `[[wikilinks]]` e collegamenti uscenti utili.
- Aggiorna `updated` a ogni modifica.
- Aggiungi ogni azione strutturale o sostanziale a `log.md`.
- Preferisci percorsi relativi al repository, intervalli di righe, commit, issue, test e documentazione ufficiale.
- Non memorizzare segreti, token, password, chiavi private, certificati o configurazioni cliente.
- Mantieni le pagine sotto circa 200 righe; separa gli approfondimenti quando necessario.

## Frontmatter

```yaml
---
title: Page title
created: YYYY-MM-DD
updated: YYYY-MM-DD
type: project | architecture | module | api | decision | workflow | bug | runbook | concept | query | status | policy | guidance
tags: [project, architecture]
project: project-slug
status: active | superseded | resolved | open | archived
confidence: high | medium | low
sources: [repository-relative/path, https://example.invalid/docs]
---
```

Usa `api` per un'interfaccia autonoma, `module` per un modulo o servizio, `concept` per un concetto durevole e `query` per un'indagine mantenuta.

## Confidenza

La confidenza descrive la qualità dell'evidenza della più debole tra le affermazioni importanti, non certifica il funzionamento in produzione.

- `high`: confermata da sorgente/configurazione corrente e, se rilevante, da un comando riuscito.
- `medium`: supportata dal codice o dalla documentazione, ma runtime, servizi esterni o flusso completo non sono verificati.
- `low`: inferita, obsoleta, contraddittoria o priva di evidenza sufficiente; indica come verificarla.

Preserva le contraddizioni con entrambe le evidenze e riduci la confidenza.

## Tassonomia tag

`project`, `architecture`, `module`, `api`, `database`, `deployment`, `decision`, `workflow`, `testing`, `debugging`, `performance`, `security`, `bug`, `runbook`, `dependency`, `integration`, `legacy`, `query`, `concept`, `documentation`.

## Regole delle pagine

- Documenta progetto, moduli importanti, API, integrazioni non ovvie, bug durevoli, procedure, concetti e decisioni.
- Non creare pagine per dettagli banali già chiari dal codice.
- Separa comportamento posseduto dal repository da librerie, servizi runtime, artefatti generati e configurazioni di deploy.
- Segnala i confini non risolti come domanda aperta o lacuna, mai come fatto inventato.

## Precedenza e manutenzione

1. Sorgente/configurazione eseguibile corrente, verificata quando rilevante.
2. Output di build/test e prove runtime.
3. Tipi, mapper, serializzatori e specifiche versionate.
4. Documentazione esplicita.
5. Wiki esistente o contesto del maintainer.
6. Inferenza dell'agente, sempre marcata.

Quando aggiorni una pagina: controlla indice e termini correlati, leggi sorgente/configurazione/test, aggiorna pagina e link, aggiorna indice, aggiungi una voce concisa al log e riporta i blocchi onestamente.
