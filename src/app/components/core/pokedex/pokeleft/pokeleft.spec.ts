import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pokeleft } from './pokeleft';

describe('Pokeleft', () => {
  let component: Pokeleft;
  let fixture: ComponentFixture<Pokeleft>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pokeleft]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pokeleft);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
