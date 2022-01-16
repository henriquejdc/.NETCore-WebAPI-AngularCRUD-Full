import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InspectionApiService } from 'src/app/inspection-api.service';

@Component({
  selector: 'app-add-edit-status',
  templateUrl: './add-edit-status.component.html',
  styleUrls: ['./add-edit-status.component.css']
})
export class AddEditStatusComponent implements OnInit {  

  @Input() status:any;
  id: number = 0;
  statusOption: string = "";

  ngOnInit(): void {
    
    this.id = this.status.id;
    this.statusOption = this.status.statusOption;

  }

  constructor(private service:InspectionApiService) { }

  addStatus() {

    var status = {
      statusOption:this.statusOption,
    }

    this.service.addStatus(status).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close-status');

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

  updateStatus() {
    var status = {
      id: this.id,
      statusOption:this.statusOption,
    }
    var id:number = this.id;
    this.service.updateStatus(id,status).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close-status');
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
