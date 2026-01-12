import {AfterViewInit, Component, effect, ElementRef, signal, ViewChild} from '@angular/core';
import gsap from "gsap";
import {Pokedex} from '../pokedex/pokedex';
import {CertificationsBriefcase} from '../certifications-briefcase/certifications-briefcase';


type ViewMode = 'certifications' | 'pokedex';
@Component({
  selector: 'app-pokeshell',
  imports: [
    Pokedex,
    CertificationsBriefcase
  ],
  templateUrl: './pokeshell.html',
  styleUrl: './pokeshell.css'
})
export class Pokeshell implements AfterViewInit {
  viewMode = signal<ViewMode>('pokedex');

  @ViewChild('pokedexEl') pokedexEl!: ElementRef<HTMLDivElement>;
  @ViewChild('briefCaseEl') briefCaseEl!: ElementRef<HTMLDivElement>;
  private viewReady = signal(false);

  constructor() {
    effect(() => {
      if (!this.viewReady()) return;

      const mode = this.viewMode();

      if (mode === 'certifications') {
        this.animateToCertifications();
      } else {
        this.animateToPokedex();
      }
    });
  }

  ngAfterViewInit() {
    this.viewReady.set(true);
  }

  goToCertifications() {
    this.viewMode.set('certifications');
  }

  goToPokedex() {
    this.viewMode.set('pokedex');
  }

  animateToCertifications() {
    const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } });

    tl.to(this.pokedexEl.nativeElement, {
      rotateY: -90,
      x: -220,
      z: -150,
      opacity: 0,
      duration: 1
    });

    tl.fromTo(
      this.briefCaseEl.nativeElement,
      {
        rotateY: 90,
        x: 220,
        z: -150,
        opacity: 0
      },
      {
        rotateY: 0,
        x: 0,
        z: 0,
        opacity: 1,
        duration: 1
      },
      '<'
    );

    tl.to('.case-lid', {
      rotateX: -110,
      duration: 1.2,
      ease: 'power3.out',
      delay: 0.3
    });
  }

  private animateToPokedex() {
    const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } });

    tl.to('.case-lid', {
      rotateX: 0,
      duration: 0.6
    });

    tl.to(this.briefCaseEl.nativeElement, {
      rotateY: 90,
      x: 220,
      z: -150,
      opacity: 0,
      duration: 1
    });

    tl.fromTo(
      this.pokedexEl.nativeElement,
      {
        rotateY: -90,
        x: -220,
        z: -150,
        opacity: 0
      },
      {
        rotateY: 0,
        x: 0,
        z: 0,
        opacity: 1,
        duration: 1
      },
      '<'
    );
  }
}
