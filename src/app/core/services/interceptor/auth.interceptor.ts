import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { tap } from 'rxjs';
import { LoaderService } from '../loader/loader.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private _loaderService: LoaderService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    this._loaderService.ShowLoader();
    return next.handle(request).pipe(
      tap(
        req => {
          if (req instanceof HttpResponse) {
            this._loaderService.HideLoader();
          }
        },
        err => {
          this._loaderService.HideLoader();
        }
      )
    );
  }
}
