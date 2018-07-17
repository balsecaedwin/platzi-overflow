import { Component } from '@angular/core';
import { Question } from './question.model';

const q = new Question(
  '¿Cómo reutilizo un componente en Android?',
  'Miren, esta es mi pregunta...',
  new Date(),
  'devicon-android-plain colored'
);

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
  `]
})

export class QuestionListComponent {
  questions: Question[] = new Array(10).fill(q);
}
