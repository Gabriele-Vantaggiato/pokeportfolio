import { Component } from '@angular/core';
import {Navbar} from '../../navbar/navbar';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-pokeleft',
  imports: [
    Navbar,
    RouterOutlet
  ],
  templateUrl: './pokeleft.html',
  styleUrl: './pokeleft.css'
})
export class Pokeleft {

}
