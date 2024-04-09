import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { popupclass } from 'src/app/models/Class/enum';
import { IndentServiceService } from 'src/app/services/master-service/indent-service.service';
import { ModalPopupService } from 'src/app/services/modalServices/modal-popup.service';

@Component({
  selector: 'app-kanta-weight',
  templateUrl: './kanta-weight.component.html',
  styleUrls: ['./kanta-weight.component.scss']
})
export class KantaWeightComponent implements OnInit  {
  submitted=false
  submitt=false
  formMaster!:FormGroup
  // prqList:any
  formMasterNew!:FormGroup
  prqlist:any
  getKantaWeight:any=""
  constructor(private fb:FormBuilder, private modalService:ModalPopupService,private formbuilder:FormBuilder, private indentService:IndentServiceService,) {}
  ngOnInit(): void {
this.formMasterNew= this.formbuilder.group({
  prqNo:["", Validators.required],
  kantaWeight:["",Validators.required]
  
})

this.PRQFORm()
this.APIBinding()
  }

PRQFORm(){
  this.formMaster= this.fb.group({
    docketNo:["", Validators.required],
  }) 
}
get fs(){
  return  this.formMaster.controls;
}


  OnSearch(){
    this.submitted= true
    if(this.formMaster.invalid){
      return
    }
    this.indentService.getDocketNo(this.formMaster.value).subscribe((res:any)=>{
this.getKantaWeight= res.data
console.log(this.getKantaWeight)
    })
    
  }

  get f(){
    return  this.formMasterNew.controls;
  }
  modelOpen(model: any) {
    debugger
    this.modalService.modalOpenSuccess(
      model,
      popupclass.info,
      true,
      false,
      false,
      popupclass.medium
    )
    
}
OnCreate(){
this.submitt=true
if(this.formMasterNew.invalid){
  return
}
}

APIBinding(){
this.indentService.getAllPRq().subscribe((res:any)=>{
this.prqlist= res.data
console.log(this.prqlist)
})
}

}
