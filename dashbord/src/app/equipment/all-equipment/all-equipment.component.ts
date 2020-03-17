import { Component, OnInit } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { ActivatedRoute, Router } from '@angular/router';
import { ColsetService } from '../../colset.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-all-equipment',
  templateUrl: './all-equipment.component.html',
  styleUrls: ['./all-equipment.component.scss']
})
export class AllEquipmentComponent implements OnInit {
  //config: any;
  totalCount:number;
  equipments:any;
  p: number;
  itemPerPage: number = 10;
  myModel = false;
  myModels = false;
  isChecked = false;
  deslectcheck = false;
  tableLoader:boolean = false;
  clientInfo: any;
  leftparam : any;
  notFoundWarn : boolean = false;
  agentStatusUpdate : string;
  notFoundWarnActive : boolean = true;
  ifChecked = false;

  d_name = true;
  a_status = true;
  la_update = true;
  la_user = true;
  wa_ex = true;
  devi_na = true;
  dec = true;
  an = true;
  sn = true;
  st = true;
  ip = true;
  mc = true;
  lc = true;
  id = true;
  ct = true;
  mr = true;
  pr = true;
  gw = true;
  
  


  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private service:AuthService,
    private __selectvalue: ColsetService,
    private __selectvalue1: ColsetService,
    private __selectvalue2: ColsetService
    ) 
  {}

  selcheckValue(event: any){
    this.__selectvalue.sendValue(event);
  }

ngOnInit() {
  
   this.__selectvalue.showvale$.subscribe(
      message =>{
        if (message === "checked"){
          this.a_status = true;
        }else if (message === "nonChecked"){
          this.a_status= false;
        }
      }
   );

   this.__selectvalue.showvale$.subscribe(
    message =>{
      if (message === "checkedAgentVersion"){
        this.d_name = true;
      }else if (message === "nonCheckedAAgentVersion"){
        this.d_name= false;
      }
    }
 );

 this.__selectvalue.showvale$.subscribe(
  message =>{
    if (message === "checkedLastAgent"){
      this.la_update = true;
    }else if (message === "nonCheckedLastAgent"){
      this.la_update= false;
    }
  }
);

this.__selectvalue.showvale$.subscribe(
  message =>{
    if (message === "checkedLastUser"){
      this.la_user = true;
    }else if (message === "nonCheckedLastUser"){
      this.la_user= false;
    }
  }
);

this.__selectvalue.showvale$.subscribe(
  message =>{
    if (message === "checkedWarrantyExpiry"){
      this.wa_ex = true;
    }else if (message === "nonCheckedWarrantyExpiry"){
      this.wa_ex= false;
    }
  }
);

this.__selectvalue.showvale$.subscribe(
  message =>{
    if (message === "checkedDeviceName"){
      this.devi_na = true;
    }else if (message === "nonCheckedDeviceName"){
      this.devi_na= false;
    }
  }
);

this.__selectvalue.showvale$.subscribe(
  message =>{
    if (message === "checkedDescription"){
      this.dec = true;
    }else if (message === "nonCheckedDescription"){
      this.dec= false;
    }
  }
);

this.__selectvalue.showvale$.subscribe(
  message =>{
    if (message === "checkedAnumber"){
      this.an = true;
    }else if (message === "nonCheckedAnumber"){
      this.an= false;
    }
  }
);

this.__selectvalue.showvale$.subscribe(
  message =>{
    if (message === "checkedSnumber"){
      this.sn = true;
    }else if (message === "nonCheckedSnumber"){
      this.sn= false;
    }
  }
);

this.__selectvalue.showvale$.subscribe(
  message =>{
    if (message === "checkedSt"){
      this.st = true;
    }else if (message === "nonCheckedSt"){
      this.st= false;
    }
  }
);

this.__selectvalue.showvale$.subscribe(
  message =>{
    if (message === "checkedIp"){
      this.ip = true;
    }else if (message === "nonCheckedIp"){
      this.ip= false;
    }
  }
);

this.__selectvalue.showvale$.subscribe(
  message =>{
    if (message === "checkedMc"){
      this.mc = true;
    }else if (message === "nonCheckedMc"){
      this.mc= false;
    }
  }
);

this.__selectvalue.showvale$.subscribe(
  message =>{
    if (message === "checkedLc"){
      this.lc = true;
    }else if (message === "nonCheckedLc"){
      this.lc= false;
    }
  }
);

this.__selectvalue.showvale$.subscribe(
  message =>{
    if (message === "checkedId"){
      this.id = true;
    }else if (message === "nonCheckedId"){
      this.id= false;
    }
  }
);

this.__selectvalue.showvale$.subscribe(
  message =>{
    if (message === "checkedCt"){
      this.ct = true;
    }else if (message === "nonCheckedCt"){
      this.ct= false;
    }
  }
);

this.__selectvalue.showvale$.subscribe(
  message =>{
    if (message === "checkedMr"){
      this.mr = true;
    }else if (message === "nonCheckedMr"){
      this.mr= false;
    }
  }
);

this.__selectvalue.showvale$.subscribe(
  message =>{
    if (message === "checkedPr"){
      this.pr = true;
    }else if (message === "nonCheckedPr"){
      this.pr= false;
    }
  }
);

this.__selectvalue.showvale$.subscribe(
  message =>{
    if (message === "checkedGw"){
      this.gw = true;
    }else if (message === "nonCheckedGw"){
      this.gw= false;
    }
  }
);

this.__selectvalue.showvale$.subscribe(
  message =>{
    if (message === "checkedclickAll"){
      this.gw = true;
      this.pr = true;
      this.mr = true;
      this.ct = true;
      this.id = true;
      this.lc = true;
      this.mc = true;
      this.ip = true;
      this.st = true;
      this.sn = true;
      this.an = true;
      this.dec = true;
      //this.devi_na = true;
      this.wa_ex = true;
      this.la_user = true;
      this.la_update = true;
      this.d_name = true;
      this.a_status= true;

    }else if (message === "nonCheckedclickAll"){
      this.gw= false;
      this.pr = false;
      this.mr = false;
      this.ct = false;
      this.id = false;
      this.lc = false;
      this.mc = false;
      this.ip = false;
      this.st = false;
      this.sn = false;
      this.an = false;
      this.dec = false;
      //this.devi_na = false;
      this.wa_ex = false;
      this.la_user = false;
      this.la_update = false;
      this.d_name = false;
      this.a_status= false;
    }
  }
);

this.loadequipments();
this.loadFromClient();
this.loadFromLeftFilters();
}

loadFromClient(){
  this.__selectvalue1.showvale1$.subscribe(
    message =>{
        //console.log(message);
        this.clientInfo = message;
        this.loadequipments();
        this.tableLoader = true;
    }
  );
}

loadFromLeftFilters(){
  this.__selectvalue2.showvale2$.subscribe(
    resp =>{
        //console.log(resp);
        this.leftparam = resp
        this.loadequipments();
        this.tableLoader = true;
    }
  );
}

pageChanged(event:number){
  //console.log(event);
  this.p = event;
  this.loadequipments();
  this.tableLoader = true
}

itemPerView(itemsSelect:number){
  //console.log(itemsSelect);
  this.itemPerPage = itemsSelect;
  this.loadequipments();
  this.tableLoader = true;
}

loadequipments(){
  this.service.getrightinitial(
    this.p, 
    this.itemPerPage, 
    this.clientInfo,
    this.leftparam
    ).subscribe(
    res=>{
      this.equipments= res;
      //console.log(this.equipments);
      this.totalCount = this.equipments.Count;
      this.tableLoader = false;

      if(this.totalCount === 0){
        this.notFoundWarn = true;
        this.notFoundWarnActive = false;
      }else{
        this.notFoundWarn = false;
        this.notFoundWarnActive = true;
      }
    },
    err=>{
      console.log(err);
    }
  )
}

}


