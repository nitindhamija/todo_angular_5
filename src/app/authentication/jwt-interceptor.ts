import { Injectable } from '@angular/core';
import {HttpRequest,HttpHandler,HttpEvent,HttpInterceptor} from '@angular/common/http';
import {Observable } from 'rxjs';

@Injectable()
export class jwtInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>,
              next: HttpHandler): Observable<HttpEvent<any>> {

       // const idToken = localStorage.getItem("id_token");
        const idToken = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJuaXRpbmRoYW1pamEiLCJzY29wZXMiOiJST0xFX2RldmVsb3BlcixST0xFX3Rlc3RlciIsImlhdCI6MTU1OTU1NjQ0MiwiZXhwIjoxNTU5NTc0NDQyfQ.dr_UqGta9DOkl7-YnJr_BT_mdqEr9_PMn4MKLboWQgo";
        if (idToken) {
            const cloned = req.clone({
                headers: req.headers.set("Authorization",
                    "Bearer " + idToken)
            });

            return next.handle(cloned);
        }
        else {
            return next.handle(req);
        }
    }
}