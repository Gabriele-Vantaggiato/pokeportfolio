import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pokeshell } from './pokeshell';

describe('Pokeshell', () => {
  let component: Pokeshell;
  let fixture: ComponentFixture<Pokeshell>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pokeshell]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pokeshell);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
