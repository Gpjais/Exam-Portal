import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from './helper';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  

  constructor(private http:HttpClient ) { }

  loadQuizes()
  {
    return this.http.get(`${baseurl}/quiz/quizes`);
  }

 public addquiz(quiz)
  {
    console.log("quiz service called");
    return this.http.post(`${baseurl}/quiz/add`,quiz)
  }

  public deleteQuiz(_id)
  {
   return this.http.delete(`${baseurl}/quiz/delete/${_id}`);
  }

  public getQuiz(qid)
  {
     return this.http.get(`${baseurl}/quiz/getQuiz/${qid}`)
  }

  updatequiz(quiz)
  {
    return this.http.put(`${baseurl}/quiz/update`,quiz).subscribe(
      (data)=>{
        console.log(data);
      },
      (error)=>
      {
        console.log(error);
      }
    )
  }
  
  getquizzesofcategory(cid)
  {
   return  this.http.get(`${baseurl}/quiz/find/${cid}`);
  }

}
