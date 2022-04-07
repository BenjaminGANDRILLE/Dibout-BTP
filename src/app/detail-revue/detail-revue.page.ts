import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-revue',
  templateUrl: './detail-revue.page.html',
  styleUrls: ['./detail-revue.page.scss'],
})
export class DetailRevuePage implements OnInit {
  idRevue
  constructor(public router: Router) { 

    if (router.getCurrentNavigation().extras.state) {
      const pageName = this.router.getCurrentNavigation().extras.state;
      console.log(pageName) 
      this.idRevue = pageName
    }
    
  }

  ngOnInit() {
  }

}
