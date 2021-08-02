import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const httpOptions = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public serverUrl;
  public serverUrlAsset;

  constructor(private http: HttpClient) {
    this.serverUrl = 'http://localhost:8888/elecompAPI3';
    this.serverUrlAsset = 'https://elecompindonesia.com/assets/img/';
   }

  getData(type: any): Observable<any> {
    return this.http.get(`${this.serverUrl}/${type}`);
  }

  login(username: any, password: any): Observable<any> {
    return this.http.get(`${this.serverUrl}/Client?username=${username}&password=${password}`);
  }

  postData(type: any, credentials): Observable<any> {
    return this.http.post(`${this.serverUrl}/${type}`, credentials, httpOptions);
  }

  getDataLocal(type: any): Observable<any> {
    return this.http.get(`${this.serverUrl}/${type}`);
  }

  putData(type: any, credentials): Observable<any> {
    return this.http.put(`${this.serverUrl}/${type}`, credentials, httpOptions);
  }

}
