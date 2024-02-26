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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    NavComponent,
    SignUpComponent,
    AccountComponent,
    FooterComponent,
    HeroComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'my-app';

  ngOnInit(): void {
    initFlowbite();
  }
}
