import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from 'src/app/services/commonservice.service';
import { WebserviceService } from 'src/app/services/webservice.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {

  locationsData: any = [];
  loactionsFilterData: any = [];

  searchValue: any = '';


  constructor(private service: WebserviceService, private CF: CommonserviceService) { }

  ngOnInit(): void {
    // ====== Calling API ====
    this.getLocations()
  }

  // ====== Get Data Function ====== 


  getLocations() {
    let url = 'location';

    this.service.Get(url).then(r => {
      console.log(r, "locations");
      this.locationsData = r.results;
      this.loactionsFilterData = r.results

    })
  }

  // ====== Location Navigation Function ====== 


  onCLickLocation(data: any) {
  }

  // ====== Data Filter By Name Function ====== 


  filterDataByName(data: any, name: any) {
    let value = name.trim();
    let a = data.filter((item: any) => item.name.toLowerCase().includes(value.toLowerCase()));
    console.log(a);
    this.loactionsFilterData = a;
    return a
  }


}
