# Project Wiki — BartenderSchoolMb

Knowledge base interconnessa del progetto, destinata a manutentori umani e agenti di coding.

## Inizia da qui

1. Leggi [[SCHEMA.md|SCHEMA]] per nomi, frontmatter, evidenze e manutenzione.
2. Leggi [[index.md|l'indice]] per trovare progetto, architettura, moduli e runbook.
3. Leggi la pagina del progetto in `projects/` prima delle pagine di dettaglio.
4. Leggi le ultime voci di [[log.md|log]].
5. Verifica sempre sorgenti e configurazione prima di documentare un comportamento.

## Regole d'uso

- Mantieni solo conoscenza durevole: architettura, moduli, decisioni, bug verificati e procedure ripetibili.
- Aggiorna `index.md` e `log.md` per ogni nuova pagina o modifica sostanziale.
- Riporta le evidenze e i comandi di verifica; usa la confidenza appropriata.
- Non inserire segreti, token, password, chiavi private o configurazioni riservate.

## Struttura

- `projects/` — scopo, forma del repository, comandi, vincoli ed evidenze.
- `architecture/` — composizione del sistema, flusso runtime e confini.
- `modules/` — moduli applicativi, server e contratti rilevanti.
- `decisions/` — decision record durevoli.
- `runbooks/` — sviluppo, verifica e troubleshooting ripetibili.
- `bugs/` — diagnosi e correzioni durevoli verificate.
- `raw/` — catture immutabili di fonti; non modificare le catture dopo l'ingestione.
- `templates/` — modelli per future pagine.

## Precedenza delle fonti

In caso di conflitto prevalgono sorgente e configurazione correnti verificate dall'esecuzione, poi evidenze di build/runtime, documentazione esplicita e infine testo wiki o inferenze dell'agente. Librerie, servizi esterni, ambienti di deploy e artefatti generati sono confini non verificati dal repository.

Preserva i nomi esatti di route, classi, chiavi JSON, chiavi di configurazione e comandi. Non dedurre contratti esterni da nomi soltanto.
