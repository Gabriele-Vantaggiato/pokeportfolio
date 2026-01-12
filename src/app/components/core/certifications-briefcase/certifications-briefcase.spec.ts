import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificationsBriefcase } from './certifications-briefcase';

describe('CertificationsBriefcase', () => {
  let component: CertificationsBriefcase;
  let fixture: ComponentFixture<CertificationsBriefcase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CertificationsBriefcase]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CertificationsBriefcase);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
