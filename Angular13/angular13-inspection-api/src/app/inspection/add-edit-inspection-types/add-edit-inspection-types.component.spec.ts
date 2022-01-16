import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditInspectionTypesComponent } from './add-edit-inspection-types.component';

describe('AddEditInspectionTypesComponent', () => {
  let component: AddEditInspectionTypesComponent;
  let fixture: ComponentFixture<AddEditInspectionTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditInspectionTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditInspectionTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
