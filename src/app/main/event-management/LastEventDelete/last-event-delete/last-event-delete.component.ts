import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountryMasterService } from 'src/app/services/master-service/country-master.service';
import { EventMasterService } from 'src/app/services/master-service/event-master.service';

@Component({
  selector: 'app-last-event-delete',
  templateUrl: './last-event-delete.component.html',
  styleUrls: ['./last-event-delete.component.scss']
})
export class LastEventDeleteComponent implements OnInit {
  formMaster!:FormGroup
  submitted=false
  formMasterNew!:FormGroup
  vehicleList:any
  vehicleData:any=""

  constructor(private fb:FormBuilder,private formbuilder:FormBuilder, private masterService:CountryMasterService,private eventService:EventMasterService,) {}
  ngOnInit(): void {
  this.formMaster= this.fb.group({
    vehicleNo:['',Validators.required],
  }
)
this.APIBinding()
this.lasteEventFilterData()
}
  get fs(){
    return this.formMaster.controls;
  }
  Searchbtn(){
    this.submitted=true
    if(this.formMaster.invalid){
      return
    }
    this.eventService.getFilterData(this.formMaster.value).subscribe((res:any)=>{
this.vehicleData= res.data[0]
this.formMasterNew.controls['vehicleNo'].setValue(this.vehicleData.vehicleNo)
this.formMasterNew.controls['eventDate'].setValue(this.vehicleData.eventDate)
this.formMasterNew.controls['maineventid'].setValue(this.vehicleData.maineventid)
this.formMasterNew.controls['mainEvent'].setValue(this.vehicleData.mainEvent)
this.formMasterNew.controls['subeventid'].setValue(this.vehicleData.subeventid)
this.formMasterNew.controls['subEvent'].setValue(this.vehicleData.subEvent)
this.formMasterNew.controls['subEventDesc'].setValue(this.vehicleData.subEventDesc)
this.formMasterNew.controls['mainEventDesc'].setValue(this.vehicleData.mainEventDesc)
this.formMasterNew.controls['vehicleStatusFlag'].setValue(this.vehicleData.vehicleStatusFlag)
this.formMasterNew.controls['location'].setValue(this.vehicleData.location)
this.formMasterNew.controls['remarks'].setValue(this.vehicleData.remarks)
this.formMasterNew.controls['reportLocation'].setValue(this.vehicleData.reportLocation)
this.formMasterNew.controls['srno'].setValue(this.vehicleData.srno)
this.formMasterNew.controls['currentEventId'].setValue(this.vehicleData.currentEventId)
this.formMasterNew.controls['scmSrNo'].setValue(this.vehicleData.scmSrNo)
    })

  }
  

lasteEventFilterData(){
this.formMasterNew=this.formbuilder.group({
  vehicleNo: [""],
  eventDate: [""],
  maineventid: [""],
  mainEvent:[""],
  subeventid: [""],
  subEvent: [""],
  subEventDesc: [""],
  mainEventDesc: [""],
  vehicleStatusFlag: [""],
  location: [""],
  remarks: [""],
  reportLocation: [""],
  srno: [""],
  currentEventId: [""],
  scmSrNo:[""],
})
}



  APIBinding(){
this.masterService.getAllVehicleMaster().subscribe((res:any)=>{
  this.vehicleList= res.data
  console.log(this.vehicleList)
})
  }
}
