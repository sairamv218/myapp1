import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from 'src/app/services/commonservice.service';
import { WebserviceService } from 'src/app/services/webservice.service';

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss']
})
export class EpisodesComponent implements OnInit {

  episodesData: any = [];
  EpisodesFilterData: any = [];
  searchValue: any = ''


  constructor(private service: WebserviceService, private CF: CommonserviceService) { }

  ngOnInit(): void {
    // ====== Calling API ====
    this.getEpisodes()
  }

  getEpisodes() {
    let url = 'episode';

    this.service.Get(url).then(r => {
      this.episodesData = r.results;
      this.EpisodesFilterData = r.results
      console.log(this.episodesData, "episodes");


    })
  }

  // ====== Episode Navigation Function ====== 


  onCLickEpisode(data: any) {
  }

  // ====== Data Filter By Name Function ====== 

  filterDataByName(data: any, name: any) {
    let value = name.trim();
    let a = data.filter((item: any) => item.name.toLowerCase().includes(value.toLowerCase()));
    console.log(a);
    this.EpisodesFilterData = a;
    return a
  }
}
