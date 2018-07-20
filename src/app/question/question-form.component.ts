import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Question } from './question.model';
import icons from './icons';
<<<<<<< HEAD
import { QuestionService } from './question.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
=======
>>>>>>> edfb54a645a354546c104088476f637473519069

@Component( {
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styles: [`
    i {
      font-size: 34px;
    }

    small {
      display: block;
    }

    i.help {
      width: 34px !important;
      height: 34px !important;
      padding: 0 !important;
      font-size: 34px !important;
    }
<<<<<<< HEAD
  `],
  providers: [QuestionService]
=======
  `]
>>>>>>> edfb54a645a354546c104088476f637473519069
})

export class QuestionFormComponent {
  icons: Object[] = icons;

<<<<<<< HEAD
  constructor(
    private questionService: QuestionService,
    private router: Router
  ) {}

=======
>>>>>>> edfb54a645a354546c104088476f637473519069
  getIconVersion(icon: any) {
    let version;
    if(icon.versions.font.includes('plain-wordmark')) {
      version = 'plain-wordmark';
    } else {
      version = icon.versions.font[0];
    }
    return version;
  }

  onSubmit(form: NgForm) {
    const q = new Question(
      form.value.title,
      form.value.description,
      new Date(),
      form.value.icon
    );
<<<<<<< HEAD
    this.questionService.addQuestion(q)
      .subscribe(
        ({ _id }) => this.router.navigate(['/questions', _id]),
        error => console.log(error)
      );
    form.resetForm();
=======
    console.log(q)
>>>>>>> edfb54a645a354546c104088476f637473519069
  }
}
