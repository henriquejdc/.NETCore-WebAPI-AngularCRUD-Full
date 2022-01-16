import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InspectionApiService } from 'src/app/inspection-api.service';

@Component({
  selector: 'app-add-edit-inspection-types',
  templateUrl: './add-edit-inspection-types.component.html',
  styleUrls: ['./add-edit-inspection-types.component.css']
})

export class AddEditInspectionTypesComponent implements OnInit {

  @Input() inspectiontypes:any;
  id: number = 0;
  inspectionName: string = "";

  constructor(private service:InspectionApiService) { }

  ngOnInit(): void {
    
    this.id = this.inspectiontypes.id;
    this.inspectionName = this.inspectiontypes.inspectionName;

  }

  addInspectionTypes() {
    
    var inspectiontypes = {
      inspectionName:this.inspectionName,
    }

    this.service.addInspectionTypes(inspectiontypes).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close-types');

      if(closeModalBtn) {
        closeModalBtn.click();
      }

      var showAddSuccess = document.getElementById('add-success-alert');
      if(showAddSuccess) {
        showAddSuccess.style.display = "block";
      }

      setTimeout(function() {
        if(showAddSuccess) {
          showAddSuccess.style.display = "none"
        }
      }, 4000);
    })

  }

  updateInspectionTypes() {
    var inspectiontypes = {
      id: this.id,
      inspectionName:this.inspectionName,
    }

    var id:number = this.id;
    this.service.updateInspectionTypes(id,inspectiontypes).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close-types');
      if(closeModalBtn) {
        closeModalBtn.click();
      }

      var showUpdateSuccess = document.getElementById('update-success-alert');
      if(showUpdateSuccess) {
        showUpdateSuccess.style.display = "block";
      }
      setTimeout(function() {
        if(showUpdateSuccess) {
          showUpdateSuccess.style.display = "none"
        }
      }, 4000);
    })

  }

}
