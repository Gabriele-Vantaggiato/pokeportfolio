import {Component, inject} from '@angular/core';
import {Pokeleft} from './pokeleft/pokeleft';
import {Pokeright} from './pokeright/pokeright';
import {AsyncPipe, NgClass} from '@angular/common';
import {Observable, of} from 'rxjs';
import {ISkill} from '../../../models/ISkill';
import {PokedexStateService} from '../../../services/pokedex-state.service';

@Component({
  selector: 'app-pokedex',
  imports: [
    Pokeleft,
    Pokeright,
    AsyncPipe],
  templateUrl: './pokedex.html',
  styleUrl: './pokedex.css'
})
export class Pokedex {

  public selectedSkill$: Observable<null | ISkill> = of(null);
  private pokedexStateSrv = inject(PokedexStateService);

  constructor() {
    this.selectedSkill$ = this.pokedexStateSrv.selectedSkill$;
  }

  clearSkill() {
    this.pokedexStateSrv.clearSelection();
  }
}
