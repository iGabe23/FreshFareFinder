import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AccountComponent } from './components/account/account.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { loginCheckGuard } from './guards/login-check.guard';
import { LoginComponent } from './components/login/login.component';
import { FAQComponent } from './components/faq/faq.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { RecipeContentComponent } from './components/recipe-content/recipe-content.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'FreshFareFinder - Home' },
  {
    path: 'login',
    component: LoginComponent,
    title: 'FreshFareFinder - Login',
  },
  {
    path: 'signUp',
    component: SignUpComponent,
    title: 'FreshFareFinder - SignUp',
  },
  {
    path: 'account',
    component: AccountComponent,
    title: 'FreshFareFinder - Profile',
    canActivate: [loginCheckGuard],
  },
  {
    path: 'recipe-content',
    title: 'FreshFareFinder - Recipes',
    loadComponent: () =>
      import('./components/recipe-content//recipe-content.component').then(
        (c) => c.RecipeContentComponent
      ),
  },
  {
    path: 'update-content',
    title: 'FreshFareFinder - Update',
    loadComponent: () =>
      import(
        './components/update-recipe-drawer/update-recipe-drawer.component'
      ).then((c) => c.UpdateRecipeDrawerComponent),
  },
  {
    path: 'FAQ',
    component: FAQComponent,
  },
  {
    path: 'testimonials',
    component: TestimonialsComponent,
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
