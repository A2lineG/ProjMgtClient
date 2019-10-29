import { Injectable } from '@angular/core';

import { Http, Headers, URLSearchParams } from '@angular/http';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {

    get isLoggedIn(): boolean {
        return localStorage.getItem('token') != null;
    }

    set isLoggedIn(value: boolean) {
        if (value === false) {
            localStorage.removeItem('token');
        }
    }

    errorMessage = '';

    // store the URL so we can redirect after logging in
    redirectUrl: string = "/";

    constructor(private http: Http, private router: Router) { }

    login(username, password) {
        const body = new URLSearchParams();
        body.set('username', username);
        body.set('password', password);
        body.set('grant_type', 'password');

        const headers = new Headers();
        headers.set('Content-Type', 'application/x-www-form-urlencoded');
        headers.set('Accept', 'application/json');

        const options = {
            method: 'POST',
            body: body,
            headers: headers
        };

        return this.http.request('http://localhost:8081/api/token', options)
        .map(
            a => { return a.json() }

        );

    }

    logout(): void {
        this.isLoggedIn = false;
    }
}