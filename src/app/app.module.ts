import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MomentModule } from 'ngx-moment';
import { AppComponent } from './app.component';
import { Routing } from './app.routing';

// Meterial Angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import 'hammerjs';

// Mis componentes

import { QuestionDetailComponent } from './question/question-detail.component';
import { AnswerFormComponent } from './answer/answer-form.component';
import { SigninScreenComponent } from './signin/signin-screen.component';
import { SignupScreenComponent } from './signup/signup-screen.component';
import { QuestionListComponent } from './question/question-list.component';
import { QuestionFormComponent } from './question/question-form.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionDetailComponent,
    AnswerFormComponent,
    SigninScreenComponent,
    SignupScreenComponent,
    QuestionListComponent,
    QuestionFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MomentModule,
    FormsModule,
    ReactiveFormsModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
