import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvCateg } from './inv-categ';

describe('InvCateg', () => {
  let component: InvCateg;
  let fixture: ComponentFixture<InvCateg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvCateg],
    }).compileComponents();

    fixture = TestBed.createComponent(InvCateg);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
