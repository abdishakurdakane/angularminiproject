import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApidataService {

  constructor(private http: HttpClient) { }
// function to call users api start here
  getAllusers_API(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('https://jsonplaceholder.typicode.com/users')
        .toPromise()
        .then(result => {
          if (result) {
            resolve(result);
          }
        }).catch(err => {
          reject(err)
        });
    });
  }
  // function to call users api ends here

}
