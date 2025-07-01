import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: 'about', data: {title: 'ABOUT_ME.TITLE'}, loadComponent: () => import('./page/about/about.page')},
  {path: 'skills', data: {title: 'SKILLS.TITLE'}, loadComponent: () => import('./page/skills/skills.page')},
  {path: 'certifications', data: {title: 'CERTIFICATIONS.TITLE'}, loadComponent: () => import('./page/certifications/certifications.page')},
  {path: 'experience', data: {title: 'EXPERIENCE.TITLE'}, loadComponent: () => import('./page/experiences/experiences.page')},
  {path: 'contact', data: {title: 'CONTACT_ME.TITLE'}, loadComponent: () => import('./page/contact/contact.page')},
  {path: '', redirectTo: '/about',  pathMatch: 'full'},
];
