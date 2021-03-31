import { Component, OnInit } from '@angular/core';
import { ExamService } from '../exam.service';
import { Question } from '../question.model';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  questions:Array<Question> = [];
  userAnswers:Array<any> = [];
  correctAnswers: Array<any> = [];
  totalQuestions: number =0;
  totalScore: number = 0;
  passed: boolean = false;
  viewResults:boolean = false;


  constructor(public service: ExamService) { }

  ngOnInit(): void {
    this.service.loadQuestions().subscribe(data => this.questions = data);
    this.userAnswers = JSON.parse(sessionStorage.getItem("answers") || "{}");
  //  this.correctAnswers = [];
    
  }

  showResults(){
    this.totalQuestions = this.questions.length;

    for(let question of this.questions){
      console.log("q",question)
      for(let choice of question.choices){
        console.log(choice)
        if(choice.Correct  && choice.Correct === "true"){
          this.correctAnswers.push(choice.answer);
        }
      }
    }
console.log(this.correctAnswers);
    for(let answer of this.userAnswers){
      if(answer.Correct && answer.Correct === "true" ){
        this.totalScore++;
      }
    }
    console.log(this.totalScore/this.totalQuestions);
      if(this.totalScore/this.totalQuestions >= 0.5){
        this.passed = true;
      }
        this.viewResults = true;

  }
}
