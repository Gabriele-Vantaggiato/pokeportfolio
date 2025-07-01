import { Component } from '@angular/core';
import {Pokeleft} from './pokeleft/pokeleft';
import {Pokeright} from './pokeright/pokeright';

@Component({
  selector: 'app-pokedex',
  imports: [
    Pokeleft,
    Pokeright
  ],
  templateUrl: './pokedex.html',
  styleUrl: './pokedex.css'
})
export class Pokedex {

}
