import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
    this.serverUrl = 'https://elecompindonesia.com/apilocus/data/index.php';
    this.serverUrlAsset = 'https://elecompindonesia.com/locus/assets/img/';
   }

  getData(type: any): Observable<any> {
    console.log(type);
    return this.http.get(`${this.serverUrl}/${type}`);
  }

  postData(type: any, credentials): Observable<any> {
    return this.http.post(`${this.serverUrl}/${type}`, credentials, httpOptions);
  }

  getDataLocal(type: any): Observable<any> {
    return this.http.get(`${this.serverUrl}/${type}`);
  }

}
