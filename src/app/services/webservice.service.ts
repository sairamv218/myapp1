import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebserviceService {

  serviceUrl = environment.serviceUrl;

  constructor(private http: HttpClient) { }


  // public async Get(url: any): Promise<any> {
  //   try {
  //     return new Promise((resolve, reject) => {
  //       const Url = `${this.serviceUrl}/${url}`;
  //       return this.http.get(Url).pipe().subscribe((r: any) => resolve(r), reject);

  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }



  public Get(url: string): Promise<any> {
    const apiUrl = `${this.serviceUrl}/${url}`;

    return new Promise((resolve, reject) => {
      this.http.get(apiUrl)
        .subscribe({
          next: (response: any) => resolve(response),
          error: (error: any) => {
            console.error(error);
            reject(error);
          }
        });
    });
  }





}
