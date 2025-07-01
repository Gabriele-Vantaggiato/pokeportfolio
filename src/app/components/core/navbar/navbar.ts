import { Component } from '@angular/core';
import {routes} from '../../../app.routes';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLinkActive,
    RouterLink,
    UpperCasePipe
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  protected routes = routes;
}
