import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css']
})
export class ViewQuizQuestionsComponent implements OnInit {

 
   quizid;
   quiztitle;
   questions=[];

  constructor(

    private _route:ActivatedRoute,
    private _Question:QuestionService
  ) { }
  
  /*
  when admin click on button question
  we are sending quiz id and quiz title in the url, and navigation to a component 
  called view-quiz-question component admin lands. 
  to get the id and title value from the url 
  we are using "ActivatedRoute" inbuilt class,
  At loading time we are storing the values in quizid and quiztitle variable.
  */
  ngOnInit(): void {
    this.quizid= this._route.snapshot.params.qid; // here we are getting qid from the url check the url definition from routing class
    this.quiztitle=this._route.snapshot.params.title; 
    console.log(this.quizid);
    console.log(this.quiztitle);
    this._Question.getQuestionsOfQuiz(this.quizid).subscribe(
      (data:any)=>
      {
        console.log(data);
        this.questions=data;
      },
      (error)=>
      {
         console.log(error);
      }
    )
  }

}
