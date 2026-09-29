import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { CoursesSectionComponent } from './components/courses-section/courses-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { TestimonialsSectionComponent } from './components/testimonials-section/testimonials-section.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeroSectionComponent,
    CoursesSectionComponent,
    AboutSectionComponent,
    TestimonialsSectionComponent,
    ContactSectionComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  protected readonly title = 'The Pour Academy';
}
