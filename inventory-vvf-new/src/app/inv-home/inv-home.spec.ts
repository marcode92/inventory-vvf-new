import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvHome } from './inv-home';

describe('InvHome', () => {
  let component: InvHome;
  let fixture: ComponentFixture<InvHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvHome],
    }).compileComponents();

    fixture = TestBed.createComponent(InvHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
