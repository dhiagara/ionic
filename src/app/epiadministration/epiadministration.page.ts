import { Component, OnInit } from '@angular/core';
  
@Component({
  selector: 'app-epiadministration',
  templateUrl: './epiadministration.page.html',
  styleUrls: ['./epiadministration.page.scss'],
})
export class EpiadministrationPage implements OnInit {
 
  
   constructor() { }
clist = [
   {
   name: 'tunisie',
   code: '+216',
   language: ['arabe', 'anglais', 'français']
 },
 {
  name: 'france',
  code: '+33',
  language: ['anglais', 'français']
},
  {
  name: 'canada',
  code: '+1',
  language: ['anglais', 'français']
  }
    ];
  

  ngOnInit() {
 
   }
}
