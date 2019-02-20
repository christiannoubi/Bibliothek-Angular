import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BibmitarbeiterService {

  public API = '//localhost:8080';
  public BIBMITARBEITER_API = this.API + '/bibmitarbeiter';
  constructor(private http: HttpClient) {

  }
  getAll(): Observable<any>{
    return this.http.get('http://localhost:8080/bibmitarbeiter');
  }
  get(id: string){
    return this.http.get(this.BIBMITARBEITER_API + '/' +id );
  }
  save(bibmitarbeiter: any): Observable<any>{
    let result: Observable<Object>;
    if (bibmitarbeiter['href']){
      result = this.http.put(this.BIBMITARBEITER_API + bibmitarbeiter.href, bibmitarbeiter);
    }else{
      result = this.http.post(this.BIBMITARBEITER_API, bibmitarbeiter);
    }
    return result;
  }
  remove (id: string) {
    return this.http.delete(this.BIBMITARBEITER_API+ '/' +id);
  }
  edit(bibmitarbeiter: any, id: string): Observable <any>{
    let result: Observable<Object>;
    result = this.http.put(this.BIBMITARBEITER_API + `/${id}`,bibmitarbeiter);
    return result;
  }
}
