import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CommonServiceService } from 'src/app/services/commonService/common-service.service';
import { CountryMasterService } from 'src/app/services/master-service/country-master.service';
import { EventMasterService } from 'src/app/services/master-service/event-master.service';

@Component({
  selector: 'app-last-event-delete',
  templateUrl: './last-event-delete.component.html',
  styleUrls: ['./last-event-delete.component.scss']
})
export class LastEventDeleteComponent implements OnInit {
  formMaster!: FormGroup
  submitted = false
  formMasterNew!: FormGroup
  vehicleList: any
  vehicleData: any = ""
  MainAndSubEventMasterList: any
  UserId: any
  constructor(private fb: FormBuilder, private formbuilder: FormBuilder, private toastrService: ToastrService, private cs: CommonServiceService,
    private masterService: CountryMasterService, private eventService: EventMasterService,) {
    this.UserId = this.cs.login_UserId()
  }
  ngOnInit(): void {
    this.formMaster = this.fb.group({
      vehicleNo: ['', Validators.required],
    }
    )
    this.APIBinding()
    this.lasteEventFilterData()
  }
  get fs() {
    return this.formMaster.controls;
  }
  Searchbtn() {
    this.submitted = true
    if (this.formMaster.invalid) {
      return
    }
    this.eventService.getFilterData(this.formMaster.value).subscribe((res: any) => {
      if (res.succeeded) {
        this.vehicleData = res.data[0]
        this.formMasterNew.patchValue(this.vehicleData)
        this.formMasterNew.controls.eventDate.setValue(this.vehicleData?.eventDate.slice(0,10))
               
      }

    }, err => {
      this.toastrService.error(err.error.Message, `Error status:${err.status}`);
    })

  }


  lasteEventFilterData() {
    this.formMasterNew = this.formbuilder.group({
      vehicleNo: [""],
      eventDate: [""],
      currentEventDesc: [""],
      subEventDesc: [""],
      mainEventDesc: [""],
      location: [""],
      remarks: [""],
      reportLocation: [""],
      srno: [""],
    
    })
  }
  APIBinding() {
    this.eventService.getAllVStsList().subscribe((res: any) => {
      this.vehicleList = res.data
      console.log(this.vehicleList)
    })

  }
  deleteData() {
    if (this.formMasterNew.invalid) {
      return
    }
    let JsonDel: any = {
      srno: this.vehicleData.srno,
      vehicleNo: this.vehicleData?.vehicleNo,
      createdBy: this.UserId

    }
    console.log(JsonDel)
    this.eventService.deleteeventsbyid(JsonDel).subscribe((res: any) => {
      if (res.succeeded) {
        this.toastrService.success('succesfully changed status', 'Success-200 !');
        this.formMasterNew.reset()
        this.formMaster.reset()
        this.submitted=false
      }
    }, err => {
      this.toastrService.error(err.error.Message, `Error status:${err.status}`);
    })
  }


}
