import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  fetchData() {
    return this.http.get('https://ninjalist-853b2.firebaseio.com/.json').map(
      (res: Response) => res.json()
    );

  }
}


