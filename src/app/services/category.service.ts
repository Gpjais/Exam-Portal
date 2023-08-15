import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from './helper';
import { ViewCategoryComponent } from '../pages/admin/view-category/view-category.component';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
   
cid: any;
   
  constructor(private Http:HttpClient ) { }

  public categories()
  {
    return this.Http.get(`${baseurl}/category/get-categories`);
  }


  public deleteCategory(id)
  {
    return this.Http.delete(`${baseurl}/category/delete/${id}`);
  }
  
}
