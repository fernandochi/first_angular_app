import { Component, Input } from '@angular/core';
import { Iproperty } from '../Ipropety.interfaces';

@Component({
  selector: 'app-property-card',
  //   template: `<h2>I am a card</h2>`,
  templateUrl: 'property-card.components.html',
  //   styles: ['h2 ( color: rgb(255,0,0);)'],
  styleUrls: ['property-card.components.css'],
})
export class PropertyCardComponent {
  @Input()
  property!: Iproperty;
}
