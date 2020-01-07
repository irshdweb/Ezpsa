import { Component, OnInit } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {
  config: any;
  collection = [];
  myModel = false;
  itemsPerPage: number = 10;
  constructor(private route: ActivatedRoute, private router: Router) { 

    this.config = {
      currentPage: 1,
      itemsPerPage: 12,
      totalItems: 0
    };
    route.queryParams.subscribe(
      params => this.config.currentPage = params['page'] ? params['page'] : 1);

    for (let i = 1; i <= 2; i++) {
      let Obj = {
        'ticket_id': `900${i}`,
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
        'dec': `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mollis enim et leo tincidunt, nec sodales risus congue. Maecenas rutrum, dui id consequat placerat, urna eros venenatis sapien, in suscipit justo orci quis lectus. Cras euismod, orci eu pellentesque lacinia, quam arcu sodales dui, non rutrum felis magna eget tellus. In augue tortor, iaculis sit amet tristique vitae, semper ac nunc. Aliquam vulputate nisl felis. Vestibulum metus tortor, tincidunt eu nunc et, sagittis pulvinar sapien. Aenean vel risus metus. Mauris ut tempus mi. Aliquam erat volutpat. Etiam sed mauris at metus rutrum pretium. Maecenas at mollis libero, eu cursus urna..`
      
      }
       this.collection.push(Obj);
    }
  }
  
  pageChange(newPage: number) {
    this.router.navigate(['tickets/ticket-id/90013/devices'], { queryParams: { page: newPage } });
  }
  
  selectedTags = [1];
  tags = [
      { id: 1, name: 'Volvo' },
      { id: 2, name: 'Saab' },
      { id: 3, name: 'Opel' },
      { id: 4, name: 'Audi' },
  ];

  ngOnInit() {
  }

}
