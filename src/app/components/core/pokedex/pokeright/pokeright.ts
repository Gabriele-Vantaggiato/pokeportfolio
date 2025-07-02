// pokeright.ts
import {Component, EventEmitter, Input, Output, signal, OnChanges, SimpleChanges, input} from '@angular/core';
import {ISkill} from '../../../../models/ISkill';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-pokeright',
  standalone: true,
  imports: [NgClass],
  templateUrl: './pokeright.html',
  styleUrl: './pokeright.css',
})
export class Pokeright implements OnChanges {
  skillSignal = input<ISkill | null>(null);
  @Output() onClose = new EventEmitter<void>();

  public animationState = signal<'open' | 'closed'>('closed');

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['skillSignal']) {
      if (changes['skillSignal'].currentValue) {
        // Aggiorniamo il signal
        this.animationState.set('open');
      } else {
        // Aggiorniamo il signal
        this.animationState.set('closed');
      }
    }
  }
}
