import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AddCategoryService } from 'src/app/services/add-category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  constructor(public snackBar: MatSnackBar, private addcategoryservice:AddCategoryService) { }
  
  public category={
    title:'',
    desccription:''
   };

   formsubmit(){
    console.log("add category button clicked");
    if(this.category.title =='')
    {
      this.snackBar.open('Please Enter Category','OK');
    }
    else if(this.category.desccription =='')
    {
      this.snackBar.open('Please Enter Description','OK');
    }
    else{
      console.log("addcategoryservice addcategory method called")
      this.addcategoryservice.addcategory(this.category).subscribe(
        (data)=>
        {
          console.log(data);
          window.location.href='admin/category' ; 
        },
        (error)=>
        {
          console.log(error);
          this.snackBar.open("some issue occured");
        })
      }
    }
  

  ngOnInit(): void {
  }

}