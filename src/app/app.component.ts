import { HttpClientService } from './@http-services/http-client.service';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { F007, RecordsLocation } from './@interface/f-d0047-077';
import { DatePipe, JsonPipe } from '@angular/common'; // <-- 1. 確保匯入 DatePipe

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DatePipe,JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  LocationLocation!: any;
  locationName!: any;
  weatherElement!: any;
  userLocation!: any;
  elementName!: string;
  locationInfo!: any;
  userInfo!: string;
  infoTime!: any;
  displayInfo: boolean = false;
  displayElement: boolean = false;
  result!: any;
  temp!: any;
  weatherValue!: any;

  constructor(private httpClientService: HttpClientService, router: Router) {}
  ngOnInit(): void {
    // let postData: JsonData = {
    //   name: 'Mickey',
    //   age: 20,
    // };
    // console.log(postData);
    // let userArray: UserArray = {
    //   userName: 'PlayerA',
    //   lev: 18,
    //   props: [
    //     {
    //       propsName: 'mushroom',
    //       amount: 5,
    //     },
    //     {
    //       propsName: 'gold',
    //       amount: 15,
    //     },
    //   ],
    // };
    // console.log(userArray);

    // getAPI
    // subscribe是用來等待api回應內容
    // res是自己取名的區域變數 為api回應的內容
    // this.httpClientService
    //   .getAPI('https://api.freeapi.app/api/v1/public/randomusers')
    //   .subscribe((res: any) => {
    //     console.log(res);
    //   });

    // 天氣API

    // postAPI
    // this.httpClientService
    //   .postAPI(
    //     'https://api.freeapi.app/api/v1/kitchen-sink/http-methods/post',
    //     postData
    //   )
    //   .subscribe((res: any) => {
    //     console.log(res);
    //   });

    this.httpClientService
      .getAPI(
        'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-077?Authorization=CWA-35A76BB4-77D8-4B5C-A555-2968EFA268B3'
      )
      .subscribe((res: F007) => {
        console.log(res);
        this.LocationLocation = res.records.Locations[0].Location;
        this.weatherElement =
          res.records.Locations[0].Location[0].WeatherElement;
        // this.infoTime =
        //   res.records.Locations[0].Location[0].WeatherElement[0].Time;
      });
  }
  sendLocation(location: RecordsLocation) {
    this.userLocation = location;
    this.displayInfo = true;
    this.locationName = this.userLocation.LocationName;
    console.log(this.userLocation);
  }

  showInfo(list: any) {
    this.infoTime = list.Time;
    this.userInfo = list.ElementName;
    this.displayElement = true;

  }
}
