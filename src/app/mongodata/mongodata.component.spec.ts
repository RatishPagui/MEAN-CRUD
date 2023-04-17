import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MongodataComponent } from './mongodata.component';

describe('MongodataComponent', () => {
  let component: MongodataComponent;
  let fixture: ComponentFixture<MongodataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MongodataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MongodataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
