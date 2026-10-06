# Schema della wiki

## Scopo

Documentazione durevole, sintetica e verificabile del progetto: struttura applicativa, componenti, vincoli, procedure e stato corrente.

## Convenzioni

- File e cartelle in minuscolo, con trattini; nessuno spazio nei nomi nuovi.
- Ogni pagina sostanziale usa frontmatter YAML con `title`, `updated`, `type`, `status`, `confidence` e `sources`.
- Collegamenti relativi Markdown; aggiornare `index.md` quando cambia l'inventario.
- Le fonti devono essere percorsi relativi al repository, comandi eseguiti o documentazione ufficiale.
- Non inserire segreti, token, password, chiavi private, certificati o configurazioni riservate.
- Tenere le pagine dense e brevi; separare solo contenuti realmente autonomi.

## Tipi e confidenza

| Campo | Valori / significato |
|---|---|
| `type` | `project`, `module`, `status`, `guidance`, `architecture`, `policy`, `bug`, `decision` |
| `status` | `active`, `open`, `resolved`, `superseded`, `archived` |
| `confidence` | `high` = codice/configurazione e verifica coerenti; `medium` = supporto dal codice ma runtime incompleto; `low` = inferenza, contraddizione o dato da verificare |

La confidenza riguarda l'evidenza più debole tra le affermazioni importanti; non certifica un deploy o un servizio esterno. Le contraddizioni vanno conservate con entrambe le fonti.

## Modello architetturale documentato

- **Browser:** `src/main.ts` avvia l'app Angular standalone.
- **Shell:** `AppComponent` compone le sezioni della landing.
- **Routing:** `src/app/app.routes.ts` contiene attualmente una tabella vuota.
- **SSR:** `src/main.server.ts` e `src/server.ts` usano Angular SSR e Express.
- **Integrazioni:** il form contatti invia a Formspree quando l'endpoint è configurato; non esistono datastore o API applicative possedute dal repository.

## Precedenza delle fonti

1. Codice e configurazione correnti, verificati quando rilevante.
2. Output di test, build e runtime.
3. README e documentazione esplicita.
4. Wiki precedente.
5. Inferenze, sempre marcate come tali.

La presenza di una dipendenza prova solo che è dichiarata, non che il flusso completo o il deploy funzionino.
