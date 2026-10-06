# Agents.md

Istruzioni operative per gli agenti del repository `bartender-school-mb`.

## Fonte di riferimento

La wiki canonica è [`doc/wiki/`](doc/wiki/). Prima di modificare il codice, leggere:

1. [`doc/wiki/SCHEMA.md`](doc/wiki/SCHEMA.md)
2. [`doc/wiki/index.md`](doc/wiki/index.md)
3. [`doc/wiki/current-status.md`](doc/wiki/current-status.md)
4. le ultime 20–30 righe di [`doc/wiki/log.md`](doc/wiki/log.md)
5. [`doc/wiki/agent-guide.md`](doc/wiki/agent-guide.md) quando il task richiede regole operative o indagini ampie

## Regole essenziali

- Ispezionare `git status --short --branch`, sorgenti, configurazione e test prima di agire.
- Trattare modifiche preesistenti come del maintainer.
- Applicare il cambiamento minimo e non fare refactor estranei.
- Non creare commit, push, reset distruttivi o riscritture della history senza richiesta esplicita.
- Non inserire segreti, token, password, chiavi o configurazioni private nella wiki.
- Verificare con il check più stretto, poi con `npm test -- --watch=false --browsers=ChromeHeadless` e `npm run build` quando pertinenti.
- Non dichiarare lint riuscito: non esiste uno script `lint` in `package.json`.
- Aggiornare pagine pertinenti, `index.md` e `log.md` dopo modifiche documentali o di comportamento.
- Prima di chiudere eseguire `git diff --check` e riportare Changed, Verified e Blocked/remaining.

Per le regole complete prevale [`doc/wiki/agent-guide.md`](doc/wiki/agent-guide.md); per schema, confidenza, fonti e limiti prevale [`doc/wiki/SCHEMA.md`](doc/wiki/SCHEMA.md).
