// pokeright.ts
import {Component, computed, EventEmitter, Input, Output, signal} from '@angular/core';
import {ISkill} from '../../../../models/ISkill';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-pokeright',
  standalone: true,
  imports: [NgClass],
  templateUrl: './pokeright.html',
  styleUrl: './pokeright.css',
})
export class Pokeright {

  skillSignal = signal<ISkill | null>(null);
  @Input() set skill(value: ISkill | null) {
    this.skillSignal.set(value);
  }

  isHidden = computed(() => !this.skillSignal());

  @Output() onClose = new EventEmitter<void>();
}
