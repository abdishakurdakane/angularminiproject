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

// function to call single  user api ends here
  /*  -------- API calling for getting single user post----------*/
  getUserSingleuser_API(id: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
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

    /*  -------- API calling for getting all posts ----------*/

    /*  this function will return post content  starts here */
    getAllPosts_API(): Promise<any> {
      return new Promise((resolve, reject) => {
        this.http.get('https://jsonplaceholder.typicode.com/posts')
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

    /*  this function will return post content  starts here */
}
