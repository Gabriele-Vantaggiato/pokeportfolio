import {ISkill} from './models/ISkill';
import {ICertifications} from './models/ICertifications';
import {IExperience} from './models/IExperience';
import {ISocialIcon} from './models/ISocialIcon';


const default_skills_path = './assets/imgs/skills/';
export const INIT_SKILL: ISkill[] = [
  {id: 'html5', imgSrc: default_skills_path + 'html.svg', title: 'HTML5', competence: "SKILLS.USING_NOW", proficiency: 97},
  {id: 'photoshop', imgSrc: default_skills_path + 'adobe-photoshop.svg', title: 'Photoshop', competence: "SKILLS.OTHER", proficiency: 45},
  {id: 'angular', imgSrc: default_skills_path + 'angular.svg', title: 'Angular', competence: "SKILLS.USING_NOW", proficiency: 95},
  {id: 'azure', imgSrc: default_skills_path + 'azure.svg', title: 'Azure', competence: "SKILLS.USED", proficiency: 40},
  {id: 'bitbucket', imgSrc: default_skills_path + 'bitbucket.svg', title: 'Bitbucket', competence: "SKILLS.USED", proficiency: 75},
  {id: 'bootstrap', imgSrc: default_skills_path + 'bootstrap.svg', title: 'Bootstrap', competence: "SKILLS.USING_NOW", proficiency: 100},
  {id: 'canva', imgSrc: default_skills_path + 'canva.svg', title: 'Canva', competence: "SKILLS.OTHER", proficiency: 35},
  {id: 'css', imgSrc: default_skills_path + 'css.svg', title: 'CSS', competence: "SKILLS.USING_NOW", proficiency: 90},
  {id: 'cypress', imgSrc: default_skills_path + 'cypress.svg', title: 'Cypress', competence: "SKILLS.USED", proficiency: 65},
  {id: 'express', imgSrc: default_skills_path + 'express.svg', title: 'Express', competence: "SKILLS.USED", proficiency: 50},
  {id: 'firebase', imgSrc: default_skills_path + 'firebase.svg', title: 'Firebase', competence: "SKILLS.USED", proficiency: 55},
  {id: 'flutter', imgSrc: default_skills_path + 'flutter.svg', title: 'Flutter', competence: "SKILLS.USED", proficiency: 48},
  {id: 'github', imgSrc: default_skills_path + 'github.svg', title: 'Github', competence: "SKILLS.USING_NOW", proficiency: 85},
  {id: 'gitlab', imgSrc: default_skills_path + 'gitlab.svg', title: 'Gitlab', competence: "SKILLS.USED", proficiency: 80},
  {id: 'ionic', imgSrc: default_skills_path + 'ionic.svg', title: 'Ionic 7', competence: "SKILLS.USED", proficiency: 75},
  {id: 'java', imgSrc: default_skills_path + 'java.svg', title: 'Java', competence: "SKILLS.USED", proficiency: 55},
  {id: 'javascript', imgSrc: default_skills_path + 'javascript.svg', title: 'Javascript', competence: "SKILLS.USED", proficiency: 90},
  {id: 'jira', imgSrc: default_skills_path + 'jira.svg', title: 'Jira', competence: "SKILLS.USED", proficiency: 88},
  {id: 'kali', imgSrc: default_skills_path + 'kali.svg', title: 'Kali', competence: "SKILLS.LEARNING", proficiency: 25},
  {id: 'mongodb', imgSrc: default_skills_path + 'mongodb.svg', title: 'MongoDB', competence: "SKILLS.USED", proficiency: 40},
  {id: 'ngrx', imgSrc: default_skills_path + 'ngrx.svg', title: 'NGRX', competence: "SKILLS.USED", proficiency: 75},
  {id: 'npm', imgSrc: default_skills_path + 'npm.svg', title: 'NPM', competence: "SKILLS.USING_NOW", proficiency: 80},
  {id: 'numpy', imgSrc: default_skills_path + 'numpy.svg', title: 'Numpy', competence: "SKILLS.LEARNING", proficiency: 30},
  {id: 'pandas', imgSrc: default_skills_path + 'pandas.svg', title: 'Pandas', competence: "SKILLS.LEARNING", proficiency: 30},
  {id: 'postgresql', imgSrc: default_skills_path + 'postgresql.svg', title: 'PostgreSQL', competence: "SKILLS.USED", proficiency: 50},
  {id: 'python', imgSrc: default_skills_path + 'python.svg', title: 'Python', competence: "SKILLS.LEARNING", proficiency: 55},
  {id: 'pytorch', imgSrc: default_skills_path + 'pytorch.svg', title: 'Pytorch', competence: "SKILLS.LEARNING", proficiency: 20},
  {id: 'raspberrypi', imgSrc: default_skills_path + 'raspberry-pi.svg', title: 'Raspberry PI', competence: "SKILLS.OTHER", proficiency: 72},
  {id: 'react', imgSrc: default_skills_path + 'react.svg', title: 'React', competence: "SKILLS.USED", proficiency: 80},
  {id: 'redux', imgSrc: default_skills_path + 'redux.svg', title: 'Redux', competence: "SKILLS.USED", proficiency: 85},
  {id: 'rxjs', imgSrc: default_skills_path + 'rxjs.svg', title: 'RxJS', competence: "SKILLS.USING_NOW", proficiency: 88},
  {id: 'sass', imgSrc: default_skills_path + 'sass.svg', title: 'Sass', competence: "SKILLS.USING_NOW", proficiency: 90},
  {id: 'sourcetree', imgSrc: default_skills_path + 'sourcetree.svg', title: 'Sourcetree', competence: "SKILLS.OTHER", proficiency: 95},
  {id: 'spring', imgSrc: default_skills_path + 'spring.svg', title: 'Spring', competence: "SKILLS.USED", proficiency: 50},
  {id: 'tailwind', imgSrc: default_skills_path + 'tailwind-css.svg', title: 'Tailwind', competence: "SKILLS.USING_NOW", proficiency: 98},
  {id: 'tensorflow', imgSrc: default_skills_path + 'tensorflow.svg', title: 'Tensorflow', competence: "SKILLS.LEARNING", proficiency: 15},
  {id: 'typescript', imgSrc: default_skills_path + 'typescript.svg', title: 'Typescript', competence: "SKILLS.USING_NOW", proficiency: 99},
  {id: 'vercel', imgSrc: default_skills_path + 'vercel.svg', title: 'Vercel', competence: "SKILLS.USING_NOW", proficiency: 89},
  {id: 'wordpress', imgSrc: default_skills_path + 'wordpress.svg', title: 'Wordpress', competence: "SKILLS.USED", proficiency: 90}
]

const default_img_certifications_path = './assets/imgs/certifications/';
const default_pdf_certifications_path = './assets/pdf/certifications/';
export const INIT_CERTIFICATIONS: ICertifications[] = [
  {
    id: 'angular_base',
    name: 'Angular Base',
    imgSrc: default_img_certifications_path + 'angular_basic_certificate.jpg',
    pdfSrc: default_pdf_certifications_path + 'angular_basic_certificate.pdf',
    category: 'fe'
  },
  {
    id: 'angular_intermediate',
    name: 'Angular Intermediate',
    imgSrc: default_img_certifications_path + 'angular_intermediate_certificate.jpg',
    pdfSrc: default_pdf_certifications_path + 'angular_intermediate_certificate.pdf',
    category: 'fe'
  },
  {
    id: 'html_css_intermediate',
    name: 'HTML/CSS Intermediate',
    imgSrc: default_img_certifications_path + 'html_css_intermediate_matchguru_certificate.png',
    pdfSrc: default_pdf_certifications_path + 'html_css_intermediate_matchguru_certificate.pdf',
    category: 'fe'
  },
  {
    id: 'angular_evolution',
    name: 'Angular Evolution',
    imgSrc: default_img_certifications_path + 'angular_evolution_completion.png',
    pdfSrc: default_pdf_certifications_path + 'angular_evolution_completion.pdf',
    category: 'fe'
  },

]

export const INIT_WORK_EXPERIENCE: IExperience[] = [
  {
    id: "JuniorDeveloper",
    title: "Junior software developer",
    period: "2019 - 2022",
    description: [
      'EXPERIENCE.JUNIOR.DESCRIPTION.TIMELINE_1',
      'EXPERIENCE.JUNIOR.DESCRIPTION.TIMELINE_2',
      'EXPERIENCE.JUNIOR.DESCRIPTION.TIMELINE_3',
      'EXPERIENCE.JUNIOR.DESCRIPTION.TIMELINE_4',
      'EXPERIENCE.JUNIOR.DESCRIPTION.TIMELINE_5',
      'EXPERIENCE.JUNIOR.DESCRIPTION.TIMELINE_6',
    ]
  },
  {
    id: "SeniorDeveloper",
    title: "Senior software developer",
    period: "2022 - Giugno 2024",
    description: [
      'EXPERIENCE.SENIOR.DESCRIPTION.TIMELINE_1',
      'EXPERIENCE.SENIOR.DESCRIPTION.TIMELINE_2',
      'EXPERIENCE.SENIOR.DESCRIPTION.TIMELINE_3',
      'EXPERIENCE.SENIOR.DESCRIPTION.TIMELINE_4',
      'EXPERIENCE.SENIOR.DESCRIPTION.TIMELINE_5',
      'EXPERIENCE.SENIOR.DESCRIPTION.TIMELINE_6',
    ]
  },
  {
    id: "CTO",
    title: "Senior software developer",
    period: "Giugno 2024 - Novembre 2024",
    description: [
      'EXPERIENCE.CTO.DESCRIPTION.TIMELINE_1',
      'EXPERIENCE.CTO.DESCRIPTION.TIMELINE_2',
      'EXPERIENCE.CTO.DESCRIPTION.TIMELINE_3',
      'EXPERIENCE.CTO.DESCRIPTION.TIMELINE_4',
      'EXPERIENCE.CTO.DESCRIPTION.TIMELINE_5',
    ]
  }
]

export const INIT_SOCIAL_ICONS: ISocialIcon[] = [
  {url: 'https://github.com/Gabriele-Vantaggiato?tab=overview&from=2025-05-01&to=2025-05-31', imgPath: 'https://img.icons8.com/ios-filled/24/ffffff/github.png', alt: 'github'},
  {url: '../contact', imgPath: 'https://img.icons8.com/ios-filled/24/ffffff/email.png', alt: 'email'},
  {url: 'https://www.linkedin.com/in/gabriele-vantaggiato-29b586183', imgPath: 'https://img.icons8.com/ios-filled/24/ffffff/linkedin.png', alt: 'linkedin'}
]
