import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { googleAPI } from 'src/api-key';

@Component({
  selector: 'app-location-search',
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.css']
})
export class LocationSearchComponent {

  constructor(private http: HttpClient) {}

  addNum: string = "";
  street: string = "";
  city: string = "";
  state: string = "";
  country: string = "";
  // now : number | Date = Date.now();

  getCoord(): void {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=
    ${this.addNum}%20${this.street}%20${this.city}%20${this.state}%20${this.country}&key=${googleAPI}`;
  
    this.http.get(url).subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }

  getImage() : void {
    // const url = `https://images-api.nasa.gov/search?q=${this.keyword}&media_type=image&page_size=1000`;

    // this.http.get(url).subscribe((data: any) => {

    //   console.log(data.collection.items.length);
    //   this.nasaPics = data.collection.items.sort(() => 0.5 - Math.random()).slice(0, this.numPics); 
    //   console.log(this.nasaPics);
    // })
  }

}
