import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter, inject,
  input,
  OnChanges,
  Output,
  signal, SimpleChanges,
} from '@angular/core';
import {ISkill} from '../../../../models/ISkill';
import {NgClass} from '@angular/common';
import {AudioService} from '../../../../services/audio.service';
import {SkillDetail} from '../../../../page/skills/skill-detail/skill-detail';

@Component({
  selector: 'app-pokeright',
  standalone: true,
  imports: [NgClass, SkillDetail],
  templateUrl: './pokeright.html',
  styleUrl: './pokeright.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Pokeright implements OnChanges {
  skillSignal = input<ISkill | null>(null);
  @Output() onClose = new EventEmitter<void>();

  public animationState = signal<'open' | 'closed'>('closed');
  audioService = inject(AudioService);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['skillSignal']) {
      if (!changes['skillSignal'].firstChange) {
        if (changes['skillSignal'].currentValue) {
          this.audioService.playOpen();
          this.animationState.set('open');
        } else {
          this.audioService.playClose();
          this.animationState.set('closed');
        }
      }

    }
  }
}
