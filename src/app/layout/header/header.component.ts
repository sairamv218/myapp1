import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from 'src/app/services/commonservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // ==== Menu Data ===

  menuData: any = [
    { path: '', name: 'Profiles' },
    { path: 'locations', name: 'Locations' },
    { path: 'episodes', name: 'Episodes' },


  ]

  constructor(private CF: CommonserviceService) { }

  ngOnInit(): void {
  }

  //  ====  Navigation function 

  onNavigate(path: any) {
    this.CF.navigate(path, '')
  }



}
