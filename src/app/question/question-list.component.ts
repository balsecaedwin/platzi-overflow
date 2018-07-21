import { Component, OnInit } from '@angular/core';
import { Question } from './question.model';
import { QuestionService } from './question.service';
import { AuthService } from '../auth/auth.service';

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
  `],
  providers: [QuestionService]
})

export class QuestionListComponent implements OnInit {
  constructor(
    private questionService: QuestionService,
    private authService: AuthService
  ) {}

  questions: Question[];
  loading = true;

  ngOnInit()  {
    this.questionService.getQuestions()
      .then((questions: Question[]) => {
        this.questions = questions;
        this.loading = false;
      })
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }
}
