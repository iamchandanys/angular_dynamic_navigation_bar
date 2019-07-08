import { Component } from '@angular/core';
import { NavBarData } from './dashboard-menus';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(){
    this.GetNavArray();
  }

  dashboardMainMenu: any[] = [];
  sep: any;
  AppPermissions: any[] = ["ET Search", "WF View"];
  menuArr: MainArrayType[] = [];

  GetNavArray() {
    this.dashboardMainMenu = NavBarData;
    this.sep = this.dashboardMainMenu.length - 2;

    for (let schild of this.dashboardMainMenu) {
      this.menuArr.push(schild.child);

      if (schild.child && schild.child.length > 0) {
        schild.child.forEach((x: any) => {
          if (this.AppPermissions.includes(x.Permission)) {
            x.Visible = "true";
            schild.Visible = "true";
          }
        });
      }

      if (this.AppPermissions.includes(schild.Permission)) {
        schild.Visible = "true";
      }
    }
  }
}

export class MainArrayType {
  applicationName: string;
  url: string;
}
