import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Pokedex} from './components/core/pokedex/pokedex';
import {Pokeshell} from './components/core/pokeshell/pokeshell';

@Component({
  selector: 'app-root',
  imports: [Pokeshell],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'pokedev';
}
