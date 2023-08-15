import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-view-quizes',
  templateUrl: './view-quizes.component.html',
  styleUrls: ['./view-quizes.component.css']
})
export class ViewQuizesComponent implements OnInit {

   quizes=[] 

  constructor(public _quiz:QuizService) { }

   
  ngOnInit(): void {
  this._quiz.loadQuizes().subscribe((data:any)=>{
    this.quizes=data;
    console.log(data);
  },
  (error)=>{
    console.log("error");
  }
  )
  }

  public deletequiz(quiz_id: any){
   this._quiz.deleteQuiz(quiz_id).subscribe(
    (data)=>
    {
      alert("data deleted successfully");
      window.location.reload();
    },
    (error)=>
    {
      alert("some error while deletting the data");

    }
   )
  }

}
