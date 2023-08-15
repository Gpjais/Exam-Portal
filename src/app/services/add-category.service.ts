import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from './helper';


@Injectable({
  providedIn: 'root'
})
export class AddCategoryService {

  constructor(private http:HttpClient) { }

   public addcategory(category:any){
    console.log("inside add category method");
    console.log(category)
    return this.http.post(`${baseurl}/category/`,category);
  }
}
