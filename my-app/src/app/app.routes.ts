import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AccountComponent } from './components/account/account.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { loginCheckGuard } from './guards/login-check.guard';
import { LoginComponent } from './components/login/login.component';
import { FAQComponent } from './components/faq/faq.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'FreshFireFinder - Home' },
  {
    path: 'login',
    component: LoginComponent,
    title: 'FreshFireFinder - Login',
  },
  {
    path: 'signUp',
    component: SignUpComponent,
    title: 'FreshFireFinder - SignUp',
  },
  {
    path: 'account',
    component: AccountComponent,
    title: 'FreshFireFinder - Profile',
    canActivate: [loginCheckGuard],
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
