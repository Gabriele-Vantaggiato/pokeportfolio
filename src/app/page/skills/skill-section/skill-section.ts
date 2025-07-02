import {ChangeDetectionStrategy, Component, EventEmitter, input, Input, Output} from '@angular/core';
import {ISkill} from '../../../models/ISkill';
import {UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-skill-section',
  imports: [
    UpperCasePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './skill-section.html',
  styleUrl: './skill-section.css'
})
export class SkillSectionComponent {
  @Input() sectionTitle: string = '';
  @Output() onSkillClick = new EventEmitter<ISkill>();

  skills = input<ISkill[]>();
}
