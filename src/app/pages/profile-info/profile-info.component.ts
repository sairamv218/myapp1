import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebserviceService } from 'src/app/services/webservice.service';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent implements OnInit {

  profileInfo: any = '';

  constructor(private activateRoute: ActivatedRoute, private service: WebserviceService) { }

  ngOnInit(): void {
    const pid = this.activateRoute.snapshot.queryParamMap.get('pid');
    pid ? this.getProfile(pid) : this.profileInfo = '';
  }

  getProfile(id: any) {
    let url = `character/${id}`;
    this.service.Get(url).then(r => {
      r ? this.profileInfo = r : this.profileInfo = '';

      console.log(this.profileInfo, "Profile");

      this.profileInfo.originKeys = this.returnKeys(this.profileInfo.origin);
      this.profileInfo.LocationKeys = this.returnKeys(this.profileInfo.location);


    })
  }

  returnKeys(item: any) {
    return item ? Object.keys(item) : []
  }

  returnIds(data: any) {
    let b = [];
    for (let i in data) {
      b.push(data[i].split("https://rickandmortyapi.com/api/episode/")[1])
    }
    return b
  }

  EpisodeIds: any = []
  onClickEpisodes() {
    let ids = this.returnIds(this.profileInfo.episode);
    this.EpisodeIds = ids

  }








}
