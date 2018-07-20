import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Answer } from './answer.model';
import { User } from '../signup/user.model';
import { Question }  from '../question/question.model';
<<<<<<< HEAD
import { QuestionService } from '../question/question.service';
import SweetScroll from 'sweet-scroll';
=======
>>>>>>> edfb54a645a354546c104088476f637473519069

@Component({
  selector: 'app-answer-form',
  templateUrl: './answer-form.component.html',
  styles: [`
      form {
        margin-top: 40px;
      }
<<<<<<< HEAD
    `],
    providers: [QuestionService]
=======
    `]
>>>>>>> edfb54a645a354546c104088476f637473519069
})

export class AnswerFormComponent {
  @Input() question: Question;
<<<<<<< HEAD
  sweetScroll: SweetScroll;

  constructor(private questionService: QuestionService) {
    this.sweetScroll = new SweetScroll();
  }
=======
>>>>>>> edfb54a645a354546c104088476f637473519069

  onSubmit(form: NgForm) {
    const answer = new Answer(
      form.value.description,
<<<<<<< HEAD
      this.question
    );
    this.questionService
      .addAnswer(answer)
      .subscribe(
        a => {
          this.question.answers.unshift(a);
          this.sweetScroll.to('#title');
        },
        error => console.log(error)
      );
=======
      this.question,
      new Date(),
      new User(null, null, 'Jose', 'García')
    );
    this.question.answers.unshift(answer);
>>>>>>> edfb54a645a354546c104088476f637473519069
    form.reset();
  }
}
