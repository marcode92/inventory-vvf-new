import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvArticolo } from './inv-articolo';

describe('InvArticolo', () => {
  let component: InvArticolo;
  let fixture: ComponentFixture<InvArticolo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvArticolo],
    }).compileComponents();

    fixture = TestBed.createComponent(InvArticolo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
