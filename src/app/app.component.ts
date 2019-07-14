import { Component } from '@angular/core';
import { NarBarData } from './dashboard-menus';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
    this.GetNavArray();
  }

  dashboardMainMenu: any[] = [];
  menuArr: MainArrayType[] = [];
  AppPermissions: any[] = [
    "Dashboard Permission",
    "Global Permission",
    "Apple Permission",
    "Orange Permission",
    "Cars Permission",
    "Volvo Bus Permission",
    "Private Bus Permission"
  ];

  GetNavArray() {
    this.dashboardMainMenu = NarBarData;

    for (let schild of this.dashboardMainMenu) {
      this.menuArr.push(schild.child);

      if (schild.child && schild.child.length > 0) {
        schild.child.forEach((x: any) => {
          if (this.AppPermissions.some(r => x.Permission.includes(r))) {
            x.Visible = "true";
            schild.Visible = "true";
            if (x.subchild.length > 0) {
              x.subchild.forEach((y: any) => {
                if (this.AppPermissions.some(a => y.Permission.includes(a))) {
                  y.Visible = "true";
                }
              })
            }
          }
        });
      }

      if (this.AppPermissions.some(x => schild.Permission.includes(x))) {
        schild.Visible = "true";
      }
    }
  }
}

export class MainArrayType {
  applicationName: string;
  url: string;
}
