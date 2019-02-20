import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuchService {

  public API = '//localhost:8080';
  public BUCH_API = this.API + '/buch';
  constructor(private http: HttpClient) {

  }
  getAll(): Observable<any>{
    return this.http.get('http://localhost:8080/buch');
  }
  get(id: string){
    return this.http.get(this.BUCH_API + '/' +id );
  }
  save(buch: any): Observable<any>{
    let result: Observable<Object>;
    if (buch['href']){
      result = this.http.put(this.BUCH_API + buch.href, buch);
    }else{
      result = this.http.post(this.BUCH_API, buch);
    }
    return result;
  }
  remove (id: string) {
    return this.http.delete(this.BUCH_API+ '/' +id);
  }
  edit(buch: any, id: string): Observable <any>{
    let result: Observable<Object>;
    result = this.http.put(this.BUCH_API + `/${id}`,buch);
    return result;
  }
}
