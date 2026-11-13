import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvAddCateg } from './inv-add-categ';

describe('InvAddCateg', () => {
  let component: InvAddCateg;
  let fixture: ComponentFixture<InvAddCateg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvAddCateg],
    }).compileComponents();

    fixture = TestBed.createComponent(InvAddCateg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
