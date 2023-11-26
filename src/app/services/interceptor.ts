import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { CommonserviceService } from './commonservice.service';
import { Observable, finalize } from "rxjs";


@Injectable()
export class InterceptorService implements HttpInterceptor {

  constructor(
    public CF: CommonserviceService,
  ) { }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.CF.isLoader = true;
    return next.handle(request).pipe(
      finalize(() => this.CF.isLoader = false)
    );
  }



}
