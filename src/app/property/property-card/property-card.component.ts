import { Component } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrl: './property-card.component.css'
})
export class PropertyCardComponent {

  Property: any = {
"id" : 1,
"Name" : "RR",
"Type" : "Villas",
"Price" : "1-2Crore"
  }

}
