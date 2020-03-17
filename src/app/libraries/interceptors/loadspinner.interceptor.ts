import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";
import { LoadSpinnerService } from '../services/loadspinner.service';
import { Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';


@Injectable()
export class LoadSpinnerInterceptor implements HttpInterceptor {

    constructor(public loaderService: LoadSpinnerService, private router: Router) {
        this.interceptRouter();
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loaderService.show();
        return next.handle(req).pipe(

            finalize(() => this.loaderService.hide())
        );
    }

    interceptRouter() {
        this.router.events.subscribe((event: Event) => {
            switch (true) {
                case event instanceof NavigationStart: {
                    this.loaderService.show();
                    break;
                }
                case event instanceof NavigationEnd:
                case event instanceof NavigationCancel:
                case event instanceof NavigationError: {
                    this.loaderService.hide();
                    break;
                }
                default: {
                    break;
                }
            }
        });
    }
}