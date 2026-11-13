import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvAssegnazione } from './inv-assegnazione';

describe('InvAssegnazione', () => {
  let component: InvAssegnazione;
  let fixture: ComponentFixture<InvAssegnazione>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvAssegnazione],
    }).compileComponents();

    fixture = TestBed.createComponent(InvAssegnazione);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
