import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ValuesService {

    private url = `${environment.apiURL}/values`;

    constructor(
        private http: HttpClient
    ) {}

    getValues<Value>() {
        return this.http.get(this.url);
    }
}
