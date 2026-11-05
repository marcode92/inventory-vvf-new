import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvModel } from './inv-model';

describe('InvModel', () => {
  let component: InvModel;
  let fixture: ComponentFixture<InvModel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvModel],
    }).compileComponents();

    fixture = TestBed.createComponent(InvModel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
