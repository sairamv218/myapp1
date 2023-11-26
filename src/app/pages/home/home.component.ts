import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from 'src/app/services/commonservice.service';
import { WebserviceService } from 'src/app/services/webservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  profilesData: any = [];
  profilesFilterData: any = [];
  searchValue: any = '';

  constructor(private service: WebserviceService, private CF: CommonserviceService) { }

  ngOnInit(): void {
    // ====== Calling API ====
    this.getProfiles()
  }

  // ====== Get Data Function ====== 

  getProfiles() {
    let url = 'character';

    this.service.Get(url).then(r => {
      console.log(r, "Profiles");
      this.profilesData = r.results;
      this.profilesFilterData = r.results

    })
  }

  // ====== Profile Navigation Function ====== 


  onCLickProfile(data: any) {
    this.CF.navigate('profileinfo', { pid: data.id })
  }

  // ====== Data Filter By Name Function ====== 


  filterDataByName(data: any, name: any) {
    let value = name.trim();
    let a = data.filter((item: any) => item.name.toLowerCase().includes(value.toLowerCase()));
    console.log(a);
    this.profilesFilterData = a;
    return a
  }

}
