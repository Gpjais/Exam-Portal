import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from './helper';
import { ViewCategoryComponent } from '../pages/admin/view-category/view-category.component';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
   

   
  constructor(private Http:HttpClient ) { }

  public categories()
  {
    return this.Http.get(`${baseurl}/category/get-categories`);
  }


  public deleteCategory(id)
  {
    return this.Http.delete(`${baseurl}/category/delete/${id}`);
  }
 
  // get the category by id 
  public getcategorybyid(cat_cid)
  {
   return this.Http.get(`${baseurl}/category/${cat_cid}`);
  }
  
}
