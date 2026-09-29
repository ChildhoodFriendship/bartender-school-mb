import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Course { number: string; title: string; detail: string; image: string; }

@Component({
  selector: 'app-courses-section',
  standalone: true,
  templateUrl: './courses-section.component.html',
  styleUrl: './courses-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesSectionComponent {
  protected readonly courses: Course[] = [
    { number: '01', title: 'Le basi', detail: '2 giorni · Principianti', image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=85' },
    { number: '02', title: 'Cocktail Lab', detail: '4 settimane · Intermedio', image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=800&q=85' },
    { number: '03', title: 'Pronto al bancone', detail: '8 settimane · Professionale', image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=85' },
  ];
}
