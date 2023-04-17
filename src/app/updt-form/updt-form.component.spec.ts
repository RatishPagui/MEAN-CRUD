import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdtFormComponent } from './updt-form.component';

describe('UpdtFormComponent', () => {
  let component: UpdtFormComponent;
  let fixture: ComponentFixture<UpdtFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdtFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdtFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
