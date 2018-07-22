import { Component, OnInit, Input } from '@angular/core';
import { Question } from './question.model';
import { QuestionService } from './question.service';

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

    mat-spinner {
      position: fixed;
      z-index: 999;
      height: 2em;
      width: 2em;
      overflow: show;
      margin: auto;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }
  `],
  providers: [QuestionService]
})

export class QuestionListComponent implements OnInit {
  constructor(
    private questionService: QuestionService
  ) {}

  @Input() sort = '-createdAt';
  questions: Question[];
  loading = true;

  ngOnInit()  {
    this.questionService.getQuestions(this.sort)
      .then((questions: Question[]) => {
        this.questions = questions;
        this.loading = false;
      })
  }
}
