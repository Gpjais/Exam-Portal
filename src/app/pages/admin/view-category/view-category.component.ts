import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
})
export class ViewCategoryComponent implements OnInit {
 
  categories=[];
  
  data:any
  constructor(public _category:CategoryService) { 
 
  }

  ngOnInit(): void {
      this._category.categories().subscribe((data:any)=>{
      console.log(data);
      this.categories=data;
      console.log(this.data.cid)
    },
    (error)=>{
      console.log(error);
    });

  }

   public deletecategory(cid){
     this._category.deleteCategory(cid).subscribe( 
    (data:any)=>
    {
      console.log(data);
      console.log("Category deleted successfully");
      window.location.reload();
    },
    (error)=>
    {
      console.log("some error while deleting category");
      console.log(error);
    }
   );
  }

 

}


