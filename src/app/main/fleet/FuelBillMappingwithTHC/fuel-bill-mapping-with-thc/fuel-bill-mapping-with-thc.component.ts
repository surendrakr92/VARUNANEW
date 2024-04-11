import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { popupclass } from "src/app/models/Class/enum";
import { CommonServiceService } from "src/app/services/commonService/common-service.service";
import { OperationsService } from "src/app/services/master-service/operations.service";
import { ModalPopupService } from "src/app/services/modalServices/modal-popup.service";

@Component({
  selector: "app-fuel-bill-mapping-with-thc",
  templateUrl: "./fuel-bill-mapping-with-thc.component.html",
  styleUrls: ["./fuel-bill-mapping-with-thc.component.scss"],
})
export class FuelBillMappingWithThcComponent implements OnInit {
  formMaster!: FormGroup;
  formMasterNew!: FormGroup;
  submitt = false;
  submitted = false;
  tripIdno: any;
  branchId: any;
  fuelbillthcmapping: any = "";
  updatefuelbillthcmapping: any = ''
  constructor(
    private fb: FormBuilder,
    private formbuilder: FormBuilder,
    private operationService: OperationsService,
    private toastrService: ToastrService,
    private cs: CommonServiceService,
    private modalService:ModalPopupService,
  ) {
    this.branchId = this.cs.login_UserCurrBranchId();
  }
  ngOnInit(): void {
    this.formMaster = this.fb.group({
      tripId: ["", Validators.required],
    });
    this.APIBinding();
    this.getFilterData();
  }
  get fs() {
    return this.formMaster.controls;
  }
  OnSubmit() {
    this.submitt = true;
    if (this.formMaster.invalid) {
      return;
    }
    this.operationService
      .getallfuelbillthcmapping(this.formMaster.value)
      .subscribe((res: any) => {
       this.fuelbillthcmapping= res.data
      });
  }



  updatefuel(){
        let json: any = {
      dataId: this.fuelbillthcmapping?.dataId,
      thcId: this.fuelbillthcmapping?.thcId,
      tripId: this.formMaster.controls["tripId"].value,
    };
    console.log(json);
    this.operationService.updatefuelbillthcmapping(json).subscribe((res: any) => {
      if (res.succeeded) {
        this.toastrService.success('succesfully Updated Fuel Bill Mapping with THC !', 'Success-200 !');
        this.formMaster.reset()
        this.formMasterNew.reset('')
        this.submitt=false
      }

    }, err => {
      this.toastrService.error(err.error.Message, `Error status:${err.status}`);
    })
  }



  getFilterData() {
    this.formMasterNew = this.formbuilder.group({
      place: [""],
      billno: [""],
      billDate: [""],
      dieselLtr: [""],
      vendorname: [""],
      fuelType: [""],
      thcno: [""],
    });
  }

  get f() {
    return this.formMasterNew.controls;
  }

  Submit() {
    if (this.formMasterNew.invalid) {
      return
    }
    let json: any = {
      dataId: this.fuelbillthcmapping?.dataId,
      thcId: this.fuelbillthcmapping?.thcId,
      tripId: this.formMaster.controls["tripId"].value,
    };
    console.log(json);
    this.operationService.updatefuelbillthcmapping(json).subscribe((res: any) => {
      if (res.succeeded) {
        this.toastrService.success('succesfully Updated Fuel Bill Mapping with THC !', 'Success-200 !');
        this.formMaster.reset()
        this.formMasterNew.reset('')
        this.submitt=false
      }

    }, err => {
      this.toastrService.error(err.error.Message, `Error status:${err.status}`);
    })

  }

  APIBinding() {
    this.operationService.getalltripnumber(this.branchId).subscribe(
      (res: any) => {
        if (res.succeeded) {
          this.tripIdno = res.data;
          console.log(this.tripIdno);
        }
      },
      (err) => {
        this.toastrService.error(
          err.error.Message,
          `Error status:${err.status}`
        );
      }
    );
  }
}
