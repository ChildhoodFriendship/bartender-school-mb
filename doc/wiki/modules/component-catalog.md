---
title: Catalogo componenti
created: 2026-10-06
updated: 2026-10-06
type: module
tags: [module, architecture, integration, documentation]
project: bartender-school-mb
status: active
confidence: high
sources: [src/app/app.component.ts, src/app/app.component.html, src/app/components, src/server.ts, src/app/components/contact-section/contact-section.component.ts]
---

# Catalogo componenti

Catalogo dei componenti principali. La presenza del codice non certifica il funzionamento di servizi esterni, browser o deploy.

| Componente/modulo | Responsabilità | Input/output e vincoli |
|---|---|---|
| `AppComponent` | Shell root; ordina sezioni e `router-outlet`. | Importa i child component; titolo protetto; nessun input/output pubblico. |
| `HeaderComponent` | Header e navigazione. | Standalone, template e CSS locali; nessun input/output. |
| `HeroSectionComponent` | Hero e CTA iniziale. | Contenuto statico e asset esterni nel template. |
| `CoursesSectionComponent` | Elenco dei tre percorsi formativi. | Array protetto `courses` con numero, titolo, dettaglio e immagine; immagini Unsplash temporanee. |
| `AboutSectionComponent` | Metodo e identità della scuola. | Contenuto statico; nessun input/output. |
| `TestimonialsSectionComponent` | Testimonianza sociale. | Contenuto statico; nessun input/output. |
| `ContactSectionComponent` | Invio del form contatti. | Endpoint Formspree protetto; signal `submissionState` con `idle`, `sending`, `success`, `error`, `missing-endpoint`; placeholder blocca l'invio. |
| `FooterComponent` | Footer della landing. | Contenuto statico; nessun input/output. |
| `appConfig` | Provider browser: zone coalescing, router e hydration con event replay. | Route table attualmente vuota. |
| Server SSR | Asset statici e fallback Angular con Express `CommonEngine`. | Richiede build; `PORT` o `4000`; nessuna API applicativa definita. |

## Flusso dati

`main.ts` avvia `AppComponent`; la shell rende le sezioni; il form invia `FormData` con `fetch` POST e `Accept: application/json`; SSR usa `main.server.ts` e `server.ts` per bootstrap e rendering.

## Vincoli

Tutti i componenti sono standalone e usano `ChangeDetectionStrategy.OnPush`. Non esistono datastore o servizi di dominio nel repository. Formspree e le immagini esterne restano integrazioni non verificate in produzione.
