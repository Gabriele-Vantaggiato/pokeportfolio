import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pokeright } from './pokeright';

describe('Pokeright', () => {
  let component: Pokeright;
  let fixture: ComponentFixture<Pokeright>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pokeright]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pokeright);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
