import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BibmitgliedService {

  public API = '//localhost:8080';
  public BIBMITGLIED_API = this.API + '/bibmitglied';
  constructor(private http: HttpClient) {

  }
  getAll(): Observable<any>{
    return this.http.get('http://localhost:8080/bibmitglied');
  }
  get(id: string){
    return this.http.get(this.BIBMITGLIED_API + '/' +id );
  }
  save(bibmitglied: any): Observable<any>{
    let result: Observable<Object>;
    if (bibmitglied['href']){
      result = this.http.put(this.BIBMITGLIED_API + bibmitglied.href, bibmitglied);
    }else{
      result = this.http.post(this.BIBMITGLIED_API, bibmitglied);
    }
    return result;
  }
  remove (id: string) {
    return this.http.delete(this.BIBMITGLIED_API+ '/' +id);
  }
  edit(bibmitglied: any, id: string): Observable <any>{
    let result: Observable<Object>;
    result = this.http.put(this.BIBMITGLIED_API + `/${id}`,bibmitglied);
    return result;
  }
}
