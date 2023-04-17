import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APIdataComponent } from './apidata.component';

describe('APIdataComponent', () => {
  let component: APIdataComponent;
  let fixture: ComponentFixture<APIdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ APIdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(APIdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
