import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {

  /*
   the dynamic value which is "id" coming from url : we will try to store in qid.
  */
 
  qid=0;
  quiz;
  categories;
  constructor(private route:ActivatedRoute, private _quiz:QuizService,private _cat:CategoryService) { }
   

  ngOnInit(): void {
    // the id will get stored into qid from route
    this.qid=this.route.snapshot.params.qid;
     this._quiz.getQuiz(this.qid).subscribe(
      (data:any)=>
      {
        console.log(data);
          this.quiz=data;
          console.log("data is loaded for update"+data);
      },
      (error)=>
      {

        console.log("error while loading quiz for update"+error)
      }
     );

     this._cat.categories().subscribe(
      (data)=>
      {
        console.log(data);
        this.categories=data;
      },
      (error)=>
      {
        console.log("error while loading categories while updating category ")
      }
     )
  } 

  updateQuiz(quiz)
  {
     this._quiz.updatequiz(quiz);
  }

}
