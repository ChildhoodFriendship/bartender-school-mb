import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

type SubmissionState = 'idle' | 'sending' | 'success' | 'error' | 'missing-endpoint';

@Component({ selector: 'app-contact-section', standalone: true, templateUrl: './contact-section.component.html', styleUrl: './contact-section.component.css', changeDetection: ChangeDetectionStrategy.OnPush })
export class ContactSectionComponent {
  protected readonly formEndpoint = 'https://formspree.io/f/REPLACE_WITH_FORMSPREE_ID';
  protected readonly submissionState = signal<SubmissionState>('idle');

  protected async submitForm(event: SubmitEvent): Promise<void> {
    event.preventDefault();
    const form = event.currentTarget;
    if (!(form instanceof HTMLFormElement)) return;

    if (this.formEndpoint.includes('REPLACE_WITH')) {
      this.submissionState.set('missing-endpoint');
      return;
    }

    this.submissionState.set('sending');
    try {
      const response = await fetch(this.formEndpoint, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (!response.ok) throw new Error('Formspree request failed');
      form.reset();
      this.submissionState.set('success');
    } catch {
      this.submissionState.set('error');
    }
  }
}
