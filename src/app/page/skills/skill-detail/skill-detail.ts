import {
  Component,
  EventEmitter, inject,
  input,
  OnDestroy,
  Output,
} from '@angular/core';
import {ISkill} from '../../../models/ISkill';
import {PokedexStateService} from '../../../services/pokedex-state.service';

@Component({
  selector: 'app-skill-detail',
  imports: [],
  templateUrl: './skill-detail.html',
  styleUrl: './skill-detail.css'
})
export class SkillDetail implements OnDestroy {
  skillSignal = input<ISkill>();
  private pokedexStateSrv = inject(PokedexStateService);
  @Output() onClose = new EventEmitter<void>();

  ngOnDestroy(): void {
    this.pokedexStateSrv.clearSelection();
  }
}
