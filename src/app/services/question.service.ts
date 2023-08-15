import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private _http:HttpClient) { }

  // get all the quiz
  public getQuestionsOfQuiz(qid){
  return  this._http.get(`${baseurl}/Question/quiz/${qid}`);
  }

  public addQuestionsOfQuiz(question){
    return  this._http.post(`${baseurl}/Question/add`,question);
    }
}
