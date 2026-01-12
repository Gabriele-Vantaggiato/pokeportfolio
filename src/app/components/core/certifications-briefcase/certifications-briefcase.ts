import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-certifications-briefcase',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications-briefcase.html',
  styleUrls: ['./certifications-briefcase.css']
})
export class CertificationsBriefcase {
  @ViewChild('caseContainer') caseContainer!: ElementRef;
  @ViewChild('lid') lid!: ElementRef;
  @Output() closeCertification = new EventEmitter<void>();

  isOpen = false;

  badges = [
    { id: 1, name: 'HTML5 Master', icon: 'assets/badges/boulder-badge.png', earned: true },
    { id: 2, name: 'CSS3 Stylist', icon: 'assets/badges/cascade-badge.png', earned: true },
    { id: 3, name: 'JS Ninja', icon: 'assets/badges/thunder-badge.png', earned: true },
    { id: 4, name: 'Angular Architect', icon: '', earned: false },
    { id: 5, name: 'React Specialist', icon: '', earned: false },
    { id: 6, name: 'Node.js Backend', icon: '', earned: false },
    { id: 7, name: 'DB Expert', icon: '', earned: false },
    { id: 8, name: 'Cloud Certified', icon: '', earned: false },
  ];

  get earnedCount() {
    return this.badges.filter(b => b.earned).length;
  }

  toggleCase() {
    this.isOpen = !this.isOpen;

    if (this.isOpen) {
      this.openAnimation();
    } else {
      this.closeAnimation();
    }
  }

  private openAnimation() {
    const tl = gsap.timeline();
    tl.to(this.lid.nativeElement, {
      duration: 0.8,
      rotationX: -110,
      transformOrigin: "top",
      ease: "power2.inOut",
      z: 50
    });
    tl.to(this.caseContainer.nativeElement, {
      duration: 0.5,
      scale: 1.05,
      y: 20,
      ease: "power1.out"
    }, "-=0.5");
  }

  private closeAnimation() {
    const tl = gsap.timeline();
    tl.to(this.lid.nativeElement, {
      duration: 0.6,
      rotationX: 0,
      z: 0,
      ease: "power2.in"
    });
    tl.to(this.caseContainer.nativeElement, {
      duration: 0.4,
      scale: 1,
      y: 0,
      ease: "power1.in"
    }, "-=0.3");
  }
}
