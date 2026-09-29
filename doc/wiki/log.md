# Coding Project Wiki Log

> Append-only. Formato: `## [YYYY-MM-DD] action | subject`.
> Azioni: `create`, `update`, `verify`, `archive`, `lint`, `query`.

## [2026-09-29] create | Wiki del progetto corrente

- Ricostruita `doc/wiki/` secondo il modello documentale di riferimento.
- Sostituiti fatti del progetto sorgente con evidenze dal repository `bartender-school-mb`.
- Mantenuti schema, frontmatter, confidenza, precedenza delle fonti, gestione agenti, token usage, template e directory vuote.

## [2026-09-29] verify | Baseline del repository

- `npm test -- --watch=false --browsers=ChromeHeadless` — pass, 3 spec.
- `npm run build` — pass, bundle browser/server e una route prerenderizzata.
- `npm run lint` — non disponibile: script assente in `package.json`.

## [2026-09-29] update | Landing page The Pour Academy

- Aggiunti shell responsive e componenti standalone per header, hero, corsi, metodo, testimonianze, contatto e footer.
- Sostituito il placeholder Angular e aggiornati i test del root component.
- Verifica: `npm test -- --watch=false --browsers=ChromeHeadless` — pass, 2 spec; `npm run build` — pass.

## [2026-09-29] update | Localizzazione e motion design

- Tradotti navigazione, hero, corsi, metodo, testimonianza, contatti e metadati HTML in italiano.
- Aggiunte animazioni di entrata, reveal legato allo scroll, hover sulle card, effetto shine sui CTA e movimento decorativo nell'hero.
- Aggiunto supporto `prefers-reduced-motion` per ridurre le animazioni quando richiesto dal sistema.
- Verifica: `npm test -- --watch=false --browsers=ChromeHeadless` — pass, 2 spec; `npm run build` — pass.

## [2026-09-29] update | Chioggia e contatto Formspree

- Aggiornata la comunicazione del sito: sede a Chioggia e un anno di attività.
- Sostituito il CTA email con un form nativo collegato a Formspree tramite `fetch`, con stati accessibili di invio, successo ed errore.
- Lasciato `REPLACE_WITH_FORMSPREE_ID` come placeholder fino alla configurazione dell'ID reale.
- Corretto il marquee con tre pannelli a larghezza viewport per mantenere il testo centrato durante il loop.

## [2026-09-29] update | Brand naming correction

- Replaced the provisional `The Pour Academy` naming with the requested brand name `Bartender School MB` across title, header, hero, contact subject, footer, and app metadata.
- Replaced the unclear phrase `Fallo tuo rituale` with `Il tuo drink, la tua firma.`.
