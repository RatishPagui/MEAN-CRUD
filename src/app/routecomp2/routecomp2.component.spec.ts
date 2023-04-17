import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Routecomp2Component } from './routecomp2.component';

describe('Routecomp2Component', () => {
  let component: Routecomp2Component;
  let fixture: ComponentFixture<Routecomp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Routecomp2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Routecomp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
