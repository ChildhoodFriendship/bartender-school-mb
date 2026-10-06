---
title: Catalogo componenti e moduli
updated: 2026-10-06
type: module
status: active
confidence: high
sources: [src/app/app.component.ts, src/app/app.component.html, src/app/components, src/server.ts, src/app/components/contact-section/contact-section.component.ts]
---

# Catalogo componenti e moduli

Tutti i componenti della landing sono standalone e usano `ChangeDetectionStrategy.OnPush`. Non espongono input/output pubblici: il contenuto è definito localmente nei template o nello stato protetto del componente.

| Componente/modulo | Scopo | Input/output e vincoli |
|---|---|---|
| `AppComponent` | Shell root; ordina le sezioni e il `router-outlet`. | Importa tutti i child component; titolo protetto `Bartender School MB`; nessun input/output. |
| `HeaderComponent` | Header e navigazione della landing. | Nessun input/output; template e CSS locali. |
| `HeroSectionComponent` | Hero e CTA iniziale. | Nessun input/output; contenuto statico e asset esterni nel template. |
| `CoursesSectionComponent` | Elenco dei tre percorsi formativi. | Stato `courses` protetto con `number`, `title`, `detail`, `image`; immagini Unsplash temporanee. |
| `AboutSectionComponent` | Sezione metodo/identità. | Nessun input/output; contenuto statico. |
| `TestimonialsSectionComponent` | Testimonianza sociale. | Nessun input/output; contenuto statico. |
| `ContactSectionComponent` | Form contatti via Formspree. | `formEndpoint` protetto; `submissionState` signal: `idle`, `sending`, `success`, `error`, `missing-endpoint`; endpoint placeholder blocca l'invio. |
| `FooterComponent` | Footer della landing. | Nessun input/output; contenuto statico. |
| `appConfig` | Provider browser: zone coalescing, router e hydration con event replay. | Route table attualmente vuota. |
| Server SSR | Asset statici e fallback Angular con Express `CommonEngine`. | Richiede build; porta da `PORT`, fallback `4000`; nessuna API applicativa definita. |

## Flusso

`main.ts` avvia `AppComponent`; la shell rende le sezioni; il form usa `fetch` POST con `FormData` e header `Accept: application/json`; SSR usa `main.server.ts` e `server.ts` per bootstrap e rendering.

## Verifica e limiti

- Il componente root ha due spec: creazione e presenza di hero/corsi/contatto.
- Non esistono datastore o servizi di dominio nel repository.
- Non considerare le immagini esterne o Formspree come integrazioni verificate in produzione.
