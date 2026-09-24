import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Charchalive — About Us',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'team',
    title: 'Our Team — Charchalive',
    loadComponent: () => import('./pages/team/team').then((m) => m.Team),
  },
  {
    path: 'team/:slug',
    loadComponent: () => import('./pages/profile/profile').then((m) => m.ProfilePage),
  },
  {
    path: 'contact',
    title: 'Contact — Charchalive',
    loadComponent: () => import('./pages/contact/contact').then((m) => m.Contact),
  },
  { path: '**', redirectTo: '' },
];
