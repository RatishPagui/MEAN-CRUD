import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Routecomp3Component } from './routecomp3.component';

describe('Routecomp3Component', () => {
  let component: Routecomp3Component;
  let fixture: ComponentFixture<Routecomp3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Routecomp3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Routecomp3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
