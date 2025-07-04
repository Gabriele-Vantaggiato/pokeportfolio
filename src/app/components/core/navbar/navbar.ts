import { Component } from '@angular/core';
import {routes} from '../../../app.routes';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {UpperCasePipe} from '@angular/common';
import {PlaySoundOnClickDirective} from '../../../directives/play-sound-on-click';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLinkActive,
    RouterLink,
    UpperCasePipe,
    PlaySoundOnClickDirective
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  protected routes = routes;
}
