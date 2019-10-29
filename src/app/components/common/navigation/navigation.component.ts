import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import 'jquery-slimscroll';

import { UserClient } from '../../../../services/Api';

declare var jQuery: any;

@Component({
  selector: 'navigation',
  templateUrl: 'navigation.template.html'
})

export class NavigationComponent implements OnInit {
  username:string;

  constructor(private router: Router, private client: UserClient) {}

  ngOnInit(){
    this.client.getInfos().subscribe(infos => {
      this.username = infos["givenname"].join('');
    });
  }

  ngAfterViewInit() {
    jQuery('#side-menu').metisMenu();

    if (jQuery('body').hasClass('fixed-sidebar')) {
      jQuery('.sidebar-collapse').slimscroll({
        height: '100%'
      })
    }
  }

  activeRoute(routename: string): boolean{
    return this.router.url.indexOf(routename) > -1;
  }


}
