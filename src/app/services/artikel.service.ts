import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

const httpOptions = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

//const apiUrl = "https://elecompindonesia.com/locusid/apilocus/data/index.php";

@Injectable({
  providedIn: 'root'
})
export class ArtikelService {
  public serverUrl;
  public serverUrlAsset;
  //url = "https://locusid.000webhostapp.com/api/data/index.php/getDetailArtikel";

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {
    this.serverUrl = 'https://elecompindonesia.com/apilocus/data/index.php';
    this.serverUrlAsset = 'https://elecompindonesia.com/locus/assets/img/';
  }

  public postRequest(url, data, useNative = true){
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    const formData = new FormData();
    // eslint-disable-next-line guard-for-in
    for ( const key in data ) {
      formData.append(key, data[key]);
    }

      return this.http.post( url, this.serialize(data, null), { headers, responseType: 'text' })
      // eslint-disable-next-line arrow-body-style
      .toPromise().then((res: any) => {
        return res;
      });
  }

  serialize(obj, prefix) {
    // eslint-disable-next-line prefer-const
    let str = [];
    let p;
    for (p in obj) {
      if (obj.hasOwnProperty(p)) {
        // eslint-disable-next-line prefer-const
        let k = prefix ? prefix + '[' + p + ']' : p;
        // eslint-disable-next-line prefer-const
        let v = obj[p];
        str.push((v !== null && typeof v === 'object') ?
          this.serialize(v, k) :
          encodeURIComponent(k) + '=' + encodeURIComponent(v));
      }
    }
    return str.join('&');
  }

  getArticle(type): Observable<any> {
    return this.http.get(`${this.serverUrl}/${type}`);
  }

  postData(type, credentials): Observable<any> {
    return this.http.post(`${this.serverUrl}/${type}`, credentials, httpOptions);
  }

  getDetails(id) {
    return this.http.get(`${this.serverUrl}/getDetailArtikel/${id}`);
  }

  // updateCountArticle(id) {
  //   return this.http.get(`${this.url}/${id}`);
  // }
  updateCountArticle(data) {
    const url = `${this.serverUrl}/updateArticle`;
    return this.postRequest(url, data);
  }

  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
