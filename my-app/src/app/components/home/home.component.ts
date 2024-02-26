import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { FooterComponent } from '../footer/footer.component';
import { HeroComponent } from '../hero/hero.component';
import { FAQComponent } from '../faq/faq.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavComponent,
    FooterComponent,
    HeroComponent,
    FAQComponent,
    TestimonialsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
