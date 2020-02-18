import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';
import { environment } from 'environments/environment';
import { User } from '../_model/user';
const authApiUrl = environment.authApiUrl;

// authentication service is used to LOGIN and LOGOUT of the application
// it posts the creds (username and password) to the backend and check for the response if it has JWT token
// if the response from the backend has jwt token, then the authentication was succesful
// on successful authentication, the user details are stored in the local storage + jwt token

@Injectable({providedIn: 'root'})
export class AuthenticationService {
    constructor(private http: HttpClient){}

    // login
    login(user:User){


        return this.http.post<any>(`${authApiUrl}token/generate-token`, user);
        // .pipe(
        //     // the backend service sends an instance of the user
        //     // user: any (because .post<any>)
        //     map(token => {
        //         // login successful if the response has jwt token
        //         if(token.token){
        //             // store user details and jwt token in the local storage to keep the user logged in between page refreshes
        //             localStorage.setItem('currentUser', JSON.stringify(token));
        //         }

        //         return token;
        //     })
        // );
    }



    // logout
    logout(){
        // remove user from local storage
        localStorage.removeItem('currentUser');
    }
}