import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {
    
   categories=[];

   public quiz={
    quiz_title:"",
    quiz_description:"",
    max_marks:"",
    no_of_question:"",
    active:"",
    category:{
      cid:"",
    }
   } 

   
  constructor(public addquiz:QuizService , public _cat:CategoryService) { }

  ngOnInit(): void {

    this._cat.categories().subscribe(
      (data:any)=>{
        console.log(data);
        console.log("categories data is loaded ");
        this.categories=data;
      },
      (error)=>{
        console.log(error);
        console.log("not able to fetch category details");
      })
 
  }
  
  addQuiz()
  {
    console.log(this.quiz);
    console.log("Add Quiz Button clicked");
    this.addquiz.addquiz(this.quiz).subscribe((data:any)=>{
     console.log(data);
     window.location.href="admin/viewQuizes";
    },
    (error)=>{
     console.log(error);
    }
    );
  }
   
}
