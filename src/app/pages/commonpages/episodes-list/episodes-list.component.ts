import { Component, Input, OnInit } from '@angular/core';
import { CommonserviceService } from 'src/app/services/commonservice.service';
import { WebserviceService } from 'src/app/services/webservice.service';

@Component({
  selector: 'app-episodes-list',
  templateUrl: './episodes-list.component.html',
  styleUrls: ['./episodes-list.component.scss']
})
export class EpisodesListComponent implements OnInit {

  // ====== Receiving Data From The Parent Component ====== 


  @Input() EpisodeIds: any;
  @Input() from: any;



  constructor(private service: WebserviceService, public CF: CommonserviceService) { }

  ngOnInit(): void {
    console.log(this.EpisodeIds);

    // ====== Setting The Things For Pagination ====== 

    this.setPagination();
  }

  CurrentData: any = [];
  CurrentPageId: number = 1;
  Pages: any = [];

  setPagination() {
    let a = Math.ceil((this.EpisodeIds.length) / 10);
    for (let i = 1; i <= a; i++) {
      this.Pages.push(i)
    }
    console.log(this.Pages, a)
    this.CurrentPageId = 1;
    // ====== Api Call  ====== 
    this.getEpisodesData(this.returnIds())
  }

  // ======  Page Navigation Function   ====== 
  onClickPage(pageid: any, type: any) {
    switch (type) {
      case 'Prev': {
        // ====== Assigning Prev Page ====== 
        this.CurrentPageId > 1 ? this.CurrentPageId = this.CurrentPageId - 1 : '';
        // ====== Api Call (Getting Data With Respective  Pageid)  ====== 
        this.getEpisodesData(this.returnIds())
        break
      }
      case 'Next': {
        // ====== Assigning Next Page ====== 
        this.CurrentPageId < this.Pages.length ? this.CurrentPageId = this.CurrentPageId + 1 : '';
        // ====== Api Call (Getting Data With Respective  Pageid)  ====== 
        this.getEpisodesData(this.returnIds())
        break
      }
      default: {
        // ====== Assigning Current Page ====== 
        this.CurrentPageId = pageid;
        this.getEpisodesData(this.returnIds())
        break
      }
    }
  }

  // ======  Return Function To Return The Episode Id's With Related to Page number   ====== 
  returnIds() {
    let temp = [...this.EpisodeIds];
    return temp.splice(((this.CurrentPageId - 1) * 10), 10).join(',')
  }

  // ======  Api Calling Function  ====== 


  getEpisodesData(ids: any) {
    let url = `episode/${ids}`;
    this.service.Get(url).then(r => {
      Array.isArray(r) ? this.CurrentData = r : this.CurrentData = [r]
      console.log(this.CurrentData, 'Episodes');
    })
  }


}
