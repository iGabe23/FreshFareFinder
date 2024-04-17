import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//
import { initFlowbite } from 'flowbite';
//
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AccountComponent } from './components/account/account.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { FAQComponent } from './components/faq/faq.component';
import { CreateRecipeDrawerComponent } from './components/create-recipe-drawer/create-recipe-drawer.component';
import { ExplainersComponent } from './components/explainers/explainers.component';
import { LoginComponent } from './components/login/login.component';
import { RecipeContentComponent } from './components/recipe-content/recipe-content.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { UpdateRecipeDrawerComponent } from './components/update-recipe-drawer/update-recipe-drawer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AccountComponent,
    CreateRecipeDrawerComponent,
    ExplainersComponent,
    FAQComponent,
    FooterComponent,
    HeroComponent,
    HomeComponent,
    LoginComponent,
    NavComponent,
    RecipeContentComponent,
    SignUpComponent,
    TestimonialsComponent,
    UpdateRecipeDrawerComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'FreshFareFinder';

  ngOnInit(): void {
    initFlowbite();
  }
}
