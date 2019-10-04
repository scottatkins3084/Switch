import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BenefitsService {

  constructor(private http: HttpClient) { }

  getBenefits() {
    const result = new Observable((observer) => {
      this.http.get('http://localhost:4200/assets/temp/benefits.json')
      .subscribe(res => {
        const resp = res as any;
        observer.next(res);
        observer.complete();
      }, res => {
        observer.error(res);
      });
    });

    return result as Observable<any>;
  }
}
