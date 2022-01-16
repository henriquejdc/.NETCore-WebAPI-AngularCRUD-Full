import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditStatusComponent } from './add-edit-status.component';

describe('AddEditStatusComponent', () => {
  let component: AddEditStatusComponent;
  let fixture: ComponentFixture<AddEditStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
