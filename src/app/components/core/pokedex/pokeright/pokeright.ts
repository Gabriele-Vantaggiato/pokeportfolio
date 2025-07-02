import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input, OnChanges,
  Output,
  signal,
  SimpleChanges
} from '@angular/core';
import {ISkill} from '../../../../models/ISkill';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-pokeright',
  standalone: true,
  imports: [NgClass],
  templateUrl: './pokeright.html',
  styleUrl: './pokeright.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Pokeright implements OnChanges {

  @Input() skill: ISkill | null = null;
  @Output() onClose = new EventEmitter<void>();

  // Signal per lo stato dell'animazione di dissolvenza/rotazione
  animationState = signal<'open' | 'closed'>('closed');
  // Signal per controllare 'display: none'
  isRemovedFromLayout = signal<boolean>(true);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['skill']) {
      if (changes['skill'].currentValue) {
        // 1. Rendi il div parte del layout (ma è ancora invisibile grazie allo stato 'closed')
        this.isRemovedFromLayout.set(false);

        // 2. USA SETTIMEOUT per avviare l'animazione nel prossimo "tick" del browser.
        //    Questo dà al browser il tempo di registrare lo stato iniziale.
        setTimeout(() => {
          this.animationState.set('open');
        }, 0); // Bastano pochi millisecondi

      } else {
        // La logica di chiusura è già corretta
        this.animationState.set('closed');
      }
    }
  }

  onTransitionEnd() {
    // Questo metodo scatta quando l'animazione di 500ms finisce
    if (this.animationState() === 'closed') {
      // Se abbiamo appena finito di chiudere, ORA possiamo rimuovere l'elemento dal layout.
      this.isRemovedFromLayout.set(true);
    }
  }
}
