import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-load-quizzes',
  templateUrl: './load-quizzes.component.html',
  styleUrls: ['./load-quizzes.component.css']
})
export class LoadQuizzesComponent implements OnInit {

  quizzes;

  constructor(private quiz:QuizService) { }

  ngOnInit(): void {
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

}
