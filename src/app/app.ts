import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Pokedex} from './components/core/pokedex/pokedex';

@Component({
  selector: 'app-root',
  imports: [Pokedex],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'pokedev';
}
