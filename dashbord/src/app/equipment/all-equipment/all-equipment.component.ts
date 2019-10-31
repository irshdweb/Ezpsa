import { Component, OnInit } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-all-equipment',
  templateUrl: './all-equipment.component.html',
  styleUrls: ['./all-equipment.component.scss']
})
export class AllEquipmentComponent implements OnInit {
  config: any;
  collection = [];
  constructor(private route: ActivatedRoute, private router: Router) {
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
  }

}


