import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ISkill} from '../../../../models/ISkill';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-pokeright',
  imports: [BrowserAnimationsModule],
  templateUrl: './pokeright.html',
  styleUrl: './pokeright.css',
})
export class Pokeright {

  @Input() skill: ISkill | null = null;

  @Output() onClose = new EventEmitter<void>();
}
