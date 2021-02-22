import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  hostname: string = 'https://api.publicapis.org/categories'

  constructor(private http: HttpClient) { }
  public getCategory(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      return this.http.get(this.hostname)
        .subscribe((res) => {
          resolve(res)
        }, err => {
          reject(err)
        })
    })

  }
}
