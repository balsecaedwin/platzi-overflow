<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { Question } from './question.model';
import { QuestionService } from './question.service';
=======
import { Component } from '@angular/core';
import { Question } from './question.model';

const q = new Question(
  '¿Cómo reutilizo un componente en Android?',
  'Miren, esta es mi pregunta...',
  new Date(),
  'devicon-android-plain colored'
);
>>>>>>> edfb54a645a354546c104088476f637473519069

@Component({
  selector: 'app-question-list',
  templateUrl: 'question-list.component.html',
  styles: [`
    i {
      font-size: 34px;
    }

    i.help {
      width: 34px !important;
      height: 34px !important;
      padding: 0 !important;
      font-size: 34px !important;
    }

    .add-question {
      position: fixed;
      bottom: 30px;
      right: 30px;
      font-size: 24px;
    }
<<<<<<< HEAD
  `],
  providers: [QuestionService]
})

export class QuestionListComponent implements OnInit {
  constructor(private questionService: QuestionService) {}

  questions: Question[];
  loading = true;

  ngOnInit()  {
    this.questionService.getQuestions()
      .then((questions: Question[]) => {
        this.questions = questions;
        this.loading = false;
      })
  }
=======
  `]
})

export class QuestionListComponent {
  questions: Question[] = new Array(10).fill(q);
>>>>>>> edfb54a645a354546c104088476f637473519069
}
