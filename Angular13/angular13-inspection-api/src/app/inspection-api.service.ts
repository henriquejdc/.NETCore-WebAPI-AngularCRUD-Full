import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InspectionApiService {

  readonly inspectionAPIUrl = "https://localhost:7164/api";

  constructor(private http:HttpClient) { }

  // Inspection
  getInspectionList():Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIUrl + '/Inspections');
  }

  addInspection(data:any) {
    return this.http.post(this.inspectionAPIUrl + '/Inspections', data)
  }

  updateInspection(id:number|string, data:any) {
    return this.http.put(this.inspectionAPIUrl + `/Inspections/${id}`, data)
  }

  deleteInspection(id:number|string) {
    return this.http.delete(this.inspectionAPIUrl + `/Inspections/${id}`)
  }

  //InspectionTypes  
  getInspectionTypesList():Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIUrl + '/InspectionTypes');
  }

  addInspectionTypes(data:any) {
    return this.http.post(this.inspectionAPIUrl + '/InspectionTypes', data)
  }

  updateInspectionTypes(id:number|string, data:any) {
    return this.http.put(this.inspectionAPIUrl + `/InspectionTypes/${id}`, data)
  }

  deleteInspectionTypes(id:number|string) {
    return this.http.delete(this.inspectionAPIUrl + `/InspectionTypes/${id}`)
  }

  //InspectionTypes  
  getStatusList():Observable<any[]> {
    return this.http.get<any>(this.inspectionAPIUrl + '/Status');
  }

  addStatus(data:any) {
    return this.http.post(this.inspectionAPIUrl + '/Status', data)
  }

  updateStatus(id:number|string, data:any) {
    return this.http.put(this.inspectionAPIUrl + `/Status/${id}`, data)
  }

  deleteStatus(id:number|string) {
    return this.http.delete(this.inspectionAPIUrl + `/Status/${id}`)
  }

}
