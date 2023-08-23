import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-load-quizzes',
  templateUrl: './load-quizzes.component.html',
  styleUrls: ['./load-quizzes.component.css']
})
export class LoadQuizzesComponent implements OnInit {

  quizzes;
  cat_id;
  


  constructor(private quiz:QuizService , private _route:ActivatedRoute , private _cat:CategoryService) { }

  ngOnInit(): void {
    
    this._route.params.subscribe(
      (params)=>
      {
        this.cat_id=params.cid;
        if(this.cat_id == 0)
        {
         this.quiz.loadQuizes().subscribe(
          (data:any)=>
          {
           console.log(data);
           this.quizzes=data;
          },
          (error)=>{
            console.log(error);
          }
        )
       }
       else{
        console.log("cateogory specific quizzes"+ this.cat_id); //
         this.quiz.getquizzesofcategory(this.cat_id).subscribe(
          (data)=>
          {
            console.log(data);
            this.quizzes=data;
          },
          (error)=>
          {
            console.log(error)
          }
         );
      }
      },
      (error)=>{
        console.log("SOME ERROR")
        
      }
    )

   
    console.log("cat-id :"+this.cat_id)

   
}
   

}
