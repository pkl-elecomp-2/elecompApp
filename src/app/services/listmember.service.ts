import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';

export enum SearchType {
  all = '',
  // eslint-disable-next-line @typescript-eslint/naming-convention
  nama_member = 'nama_member',
  // eslint-disable-next-line @typescript-eslint/naming-convention
  profesi_member = 'profesi_member'
}

const httpOptions = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

// const localAPI = "http://elecompindonesia.com/locusid/apilocus/data/index.php";
// const loginAPI = "http://localhost/api_login/";

@Injectable({
  providedIn: 'root'
})
export class ListmemberService {
  public serverUrl;
  public loginAPI;
  public serverUrlAsset;

  constructor(private http: HttpClient) {
    this.serverUrl = 'https://elecompindonesia.com/apilocus/data/index.php';
    this.serverUrlAsset = 'https://elecompindonesia.com/locus/assets/img/';
    this.loginAPI='https://elecompindonesia.com/api_login/';
  }

  searchData(namaMember: string): Observable<any> {
    return this.http.get(`${this.serverUrl}/getMember?s=${encodeURI(namaMember)}`)
    .pipe(
      map(results => {
        console.log('RAW:', results);
        // eslint-disable-next-line @typescript-eslint/dot-notation
        return results['Search'];
      })
    );
    }

  postData(type, credentials): Observable<any> {
    return this.http.post(`${this.serverUrl}/getMember/${type}`, credentials, httpOptions);
  }

  getDetails(id) {
    return this.http.get(`${this.serverUrl}/getDetailMember/${id}`);
  }

  getDataLocal(type): Observable<any> {
    return this.http.get(`${this.serverUrl}/${type}`);
  }

  postDataLocal(type,credentials): Observable<any>{
    return this.http.post(`${this.serverUrl}/${type}`,credentials,httpOptions);
  }

  postDataLogin(body, type): Observable<any> {
    const headers = new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json',
    });

    return this.http.post(`${this.loginAPI}` + type, JSON.stringify(body), { headers })
    .pipe(map(res => res));
  }
}
