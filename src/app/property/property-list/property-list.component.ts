import { Component, OnInit } from '@angular/core';
import { Iproperty } from '../Ipropety.interfaces';
import { HousingService } from '../services/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  properties: Array<Iproperty> = [];

  constructor(private housinService: HousingService) {}

  ngOnInit(): void {
    this.housinService.getAllProperties().subscribe(
      (data) => {
        this.properties = data;
        console.log(data);
      },
      (error) => {
        console.log('httperror \n', error);
      }
    );
    // this.http
    //   .get('data/properties.json')
    //   .subscribe((data) => (this.properties = data));
  }
}
