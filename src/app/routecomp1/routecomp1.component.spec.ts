import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Routecomp1Component } from './routecomp1.component';

describe('Routecomp1Component', () => {
  let component: Routecomp1Component;
  let fixture: ComponentFixture<Routecomp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Routecomp1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Routecomp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
