import {Component, ElementRef, EventEmitter, Output, signal, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import {ICertifications} from "../../../models/ICertifications";
import {INIT_CERTIFICATIONS} from "../../../constants";
import {CdkTooltipDirective} from "../../../directives/tooltip.directive";

@Component({
  selector: 'app-certifications-briefcase',
  standalone: true,
  imports: [CommonModule, CdkTooltipDirective],
  templateUrl: './certifications-briefcase.html',
  styleUrls: ['./certifications-briefcase.css']
})
export class CertificationsBriefcase {
  @ViewChild('caseContainer') caseContainer!: ElementRef;
  @ViewChild('lid') lid!: ElementRef;
  @Output() closeCertification = new EventEmitter<void>();

  public certifications = signal<ICertifications[]>(INIT_CERTIFICATIONS);
  isOpen = false;

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

  openCertification(c: ICertifications) {
    console.log(c);
  }
}
