import { Component, OnInit } from "@angular/core";
import { Menu } from "app/model/menu.Model";

@Component({
  selector: "app-side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.scss"]
})
export class SideNavComponent implements OnInit {
  menuItems: any[];
  role: string;
  constructor() {}

  ngOnInit() {
    this.menuItems = Menu.menu;
    console.log(this.menuItems);
    this.role = sessionStorage.getItem("role");
    console.log(this.role);
  }
}
