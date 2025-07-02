import {IGenericWithImage} from './IGenericWithImage';

export interface ISkill extends IGenericWithImage {
  competence: 'SKILLS.USING_NOW' | 'SKILLS.LEARNING' | 'SKILLS.OTHER' | 'SKILLS.USED',
  proficiency: number;
}
