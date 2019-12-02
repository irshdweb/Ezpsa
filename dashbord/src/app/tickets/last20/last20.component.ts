import { Component, OnInit } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-last20',
  templateUrl: './last20.component.html',
  styleUrls: ['./last20.component.scss']
})
export class Last20Component implements OnInit {
  config: any;
  collection = [];
  myModel = false;

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

  constructor(private route: ActivatedRoute, private router: Router) { 
    this.config = {
      currentPage: 1,
      itemsPerPage: 8,
      totalItems: 0
    };
    route.queryParams.subscribe(
      params => this.config.currentPage = params['page'] ? params['page'] : 1);

    for (let i = 1; i <= 100; i++) {
      let Obj = {
        'ticket_num': `900${i}`,
        'title': `Helpdesk - After hours`,
        'contact': `Ali Law1${i}`,
        'assigned': `Sales Team - ${i}`,
        'totalTime': `${i}.00 Hrs`,
        'estTime': `${i}.00 Hrs`,
        'priority': `medium`,
        'created': `24/06/20${i} ${i}:08 PM ${i}`,
        'due': `24/06/20${i} ${i}:08 PM ${i}`,
        'type': `Incident`,
        'status': `initial loading`,
        'startDate': `20.198. ${i}`,
        'last': `EM ${i}`,
        'dec': `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis enim et leo tincidunt, nec sodales risus congue. Maecenas rutrum, dui id consequat placerat, urna eros venenatis sapien, in suscipit justo orci quis lectus. Cras euismod, orci eu pellentesque lacinia, quam arcu sodales dui, non rutrum felis magna eget tellus. In augue tortor, iaculis sit amet tristique vitae, semper ac nunc. Aliquam vulputate nisl felis. Vestibulum metus tortor, tincidunt eu nunc et, sagittis pulvinar sapien. Aenean vel risus metus. Mauris ut tempus mi. Aliquam erat volutpat. Etiam sed mauris at metus rutrum pretium. Maecenas at mollis libero, eu cursus urna.
        <br/><br/>
        Vivamus euismod nisl pellentesque nibh eleifend, eu efficitur tortor sagittis. Nunc non felis pharetra, mattis nunc accumsan, facilisis nisl. Pellentesque finibus viverra urna condimentum fringilla. Mauris sit amet arcu vel tortor malesuada facilisis. Curabitur tincidunt nunc lacinia ornare fermentum. Sed tristique scelerisque porttitor. Donec ornare justo a nibh placerat, id consectetur odio euismod. Ut congue sem vel fringilla sollicitudin.`
      }
       this.collection.push(Obj);
    }
  }
  pageChange(newPage: number) {
    this.router.navigate(['tickets'], { queryParams: { page: newPage } });
  }

  ngOnInit() {
  }

}
