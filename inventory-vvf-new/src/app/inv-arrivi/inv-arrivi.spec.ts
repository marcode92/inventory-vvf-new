import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvArrivi } from './inv-arrivi';

describe('InvArrivi', () => {
  let component: InvArrivi;
  let fixture: ComponentFixture<InvArrivi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvArrivi],
    }).compileComponents();

    fixture = TestBed.createComponent(InvArrivi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
