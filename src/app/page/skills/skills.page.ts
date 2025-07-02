import {Component, computed, inject, signal} from '@angular/core';
import {ISkill} from '../../models/ISkill';
import {INIT_SKILL} from '../../constants';
import {SkillSectionComponent} from './skill-section/skill-section';
import {PokedexStateService} from '../../services/pokedex-state-service';


@Component({
  selector: 'app-skills',
  imports: [
    SkillSectionComponent
  ],
  templateUrl: './skills.page.html',
  styleUrl: './skills.page.css'
})
export default class SkillsPage {

  public skills = signal<ISkill[]>(INIT_SKILL);
  learning = computed( () => this.skills().filter( s => s.competence === 'SKILLS.LEARNING'));
  used = computed( () => this.skills().filter( s => s.competence === 'SKILLS.USED'));
  using = computed( () => this.skills().filter( s => s.competence === 'SKILLS.USING_NOW'));
  other = computed( () => this.skills().filter( s => s.competence === 'SKILLS.OTHER'));
  pokeStateService = inject(PokedexStateService);

  setSelectedSkill(skill: ISkill) {
    this.pokeStateService.selectSkill(skill);
  }

  ngOnDestroy() {
    this.pokeStateService.clearSelection();
  }
}
