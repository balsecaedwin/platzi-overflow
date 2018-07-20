<<<<<<< HEAD
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Question } from './question.model';
import { QuestionService } from './question.service';
import { ActivatedRoute } from '@angular/router';
=======
import { Component } from '@angular/core';
import { Question } from './question.model';
>>>>>>> edfb54a645a354546c104088476f637473519069

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
<<<<<<< HEAD
  styleUrls: ['./question-detail.component.css'],
  providers: [QuestionService]
})

export class QuestionDetailComponent implements OnInit, OnDestroy {
  question?: Question;
  loading = true;
  sub: any;

  constructor(
    private questionService: QuestionService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.questionService.getQuestion(params.id)
      .then((question: Question) => {
        this.question = question;
        this.loading = false;
      });
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
=======
  styleUrls: ['./question-detail.component.css']
})

export class QuestionDetailComponent {
  question: Question = new Question(
    'Esta es una nueva pregunta para Android',
    'Miren, tengo una duda con una aplicación que estoy escribiendo para Android...',
    new Date,
    'devicon-android-plain'
  );
>>>>>>> edfb54a645a354546c104088476f637473519069
}
