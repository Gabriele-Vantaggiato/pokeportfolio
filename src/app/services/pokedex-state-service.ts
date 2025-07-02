import { Injectable } from '@angular/core';
import {BehaviorSubject, refCount, shareReplay} from 'rxjs';
import {ISkill} from '../models/ISkill';

@Injectable({
  providedIn: 'root'
})
export class PokedexStateService {

  constructor() { }

  private readonly selectedSkillSubject = new BehaviorSubject<ISkill | null>(null);
  public readonly selectedSkill$ = this.selectedSkillSubject.asObservable()
    .pipe(
      shareReplay()
    );

  public selectSkill(skill: ISkill): void {
    this.selectedSkillSubject.next(skill);
  }

  public clearSelection(): void {
    this.selectedSkillSubject.next(null);
  }
}
