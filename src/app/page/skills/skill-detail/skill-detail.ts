import {
  Component,
  EventEmitter, inject,
  input,
  OnDestroy,
  Output,
} from '@angular/core';
import {ISkill} from '../../../models/ISkill';

@Component({
  selector: 'app-skill-detail',
  imports: [],
  templateUrl: './skill-detail.html',
  styleUrl: './skill-detail.css'
})
export class SkillDetail {
  skillSignal = input<ISkill>();
  @Output() onClose = new EventEmitter<void>();
}
