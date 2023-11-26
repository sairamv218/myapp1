import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {

  public isLoader: boolean = false;


  constructor(public router: Router,) { }

  public navigate(path: any, keys: any) {
    keys != '' ? this.router.navigate([path], { queryParams: keys }) : this.router.navigate([path]);
  }


}
