import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
   
  qId;
  qTitle;
  question=
    {
    "question_content":"",
    "option_one":"",
    "option_two":"",
    "option_three":"",
    "option_four":"",
    "answer":"",
    "quiz":{
      "quiz_id":""
     }
   };

  constructor(
    private _route:ActivatedRoute,
    private _question:QuestionService
  ) { }

  /*
  questionid is a variable which is decleared in 
  app.routing.ts while creating url for nevigating to add question component.
  we are sending quiz id in the url and getting this quiz id in the question id component.
  */
  ngOnInit(): void {
    this.qId=this._route.snapshot.params.qid;
    this.qTitle=this._route.snapshot.params.title;
    console.log(this.qId);
    console.log(this.qTitle);
    this.question.quiz.quiz_id=this.qId;
  }
   
  addQuestion(){
    this._question.addQuestionsOfQuiz(this.question).subscribe(
      (data)=>{
        console.log(data);
        alert("Data is saved");
      },
      (error)=>
      {
        console.log(error);
      }
    );
  }
}
