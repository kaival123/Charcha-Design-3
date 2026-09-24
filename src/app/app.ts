import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ThemeStore } from './core/theme';
import { CONTACT } from './data/site';
import { Leaf } from './layout/leaf';
import { Logo } from './layout/logo';
import { ThemePanel } from './layout/theme-panel';

@Component({
  imports: [RouterOutlet, RouterLink, RouterLinkActive, Logo, Leaf, ThemePanel],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  // Instantiated here so the saved theme is applied before any page renders.
  private readonly theme = inject(ThemeStore);

  protected readonly contact = CONTACT;
  protected readonly year = new Date().getFullYear();
  protected readonly nav = [
    { path: '/', label: 'About Us' },
    { path: '/team', label: 'Our Team' },
    { path: '/contact', label: 'Contact' },
  ];
}
