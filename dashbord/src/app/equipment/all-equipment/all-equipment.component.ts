import { Component, OnInit } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { ActivatedRoute, Router } from '@angular/router';
import { ColsetService } from '../../colset.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
@Component({
  selector: 'app-all-equipment',
  templateUrl: './all-equipment.component.html',
  styleUrls: ['./all-equipment.component.scss']
})
export class AllEquipmentComponent implements OnInit {
  config: any;
  collection = [];
  myModel = false;

  d_name = false;
  a_status = false;
  la_update = false;
  la_user = false;

  constructor(private route: ActivatedRoute, private router: Router, private __selectvalue: ColsetService) {
    this.config = {
      currentPage: 1,
      itemsPerPage: 7,
      totalItems: 0
    };
    route.queryParams.subscribe(
      params => this.config.currentPage = params['page'] ? params['page'] : 1);

    for (let i = 1; i <= 100; i++) {
      let Obj = {
        'devicename': `Desktop X450- ${i}`,
        'agent_status': `Online`,
        'dec': `EMP00 ${i}`,
        'asset': `EMP00 ${i}`,
        'serial': `EMP00 ${i}`,
        'version': `1.176. ${i}`,
        'last': `${i} Year Ago`,
        'user': `User ${i}`,
        'agent': `Managed`,
        'status': `EMP00 ${i}`,
        'ip': `10.2.3 ${i}`,
        'gateway': `20.198. ${i}`,
        'mac': `EM ${i}`,
        'location': `EM ${i}`,
        'date': `EM ${i}`,
        'contact': `EMP00 ${i}`,
        'pur': `EMP00 ${i}`,
        'warranty': `EMP00 ${i}`
      }
       this.collection.push(Obj);
    }
  }
  pageChange(newPage: number) {
    this.router.navigate(['equipment'], { queryParams: { page: newPage } });
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
   
  }

}


