import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar-user.component.html',
  styleUrls: ['./sidebar-user.component.css']
})
export class SidebarUserComponent implements OnInit {

  categories;

  constructor(private _cat:CategoryService) { }

  ngOnInit(): void {
    this._cat.categories().subscribe(
      (data:any)=>
      {
        console.log(data);
        this.categories=data;
      },
      (error)=>
      {
        console.log(error);
      }
    )
  }

}
