import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudeupdatecomComponent } from './crudeupdatecom.component';

describe('CrudeupdatecomComponent', () => {
  let component: CrudeupdatecomComponent;
  let fixture: ComponentFixture<CrudeupdatecomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudeupdatecomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudeupdatecomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
