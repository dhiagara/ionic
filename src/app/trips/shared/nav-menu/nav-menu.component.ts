import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthentificationService } from 'src/app/home/services/authentification.service';
@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
})
export class NavMenuComponent   {

  constructor(private menu: MenuController,private authService:AuthentificationService) { }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
  signOut(){

    this.authService.SignOut();
  }
}