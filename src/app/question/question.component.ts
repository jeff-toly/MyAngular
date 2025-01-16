import {Component} from '@angular/core';
import {DynamicFormComponent} from '../dynamic-form/dynamic-form.component';
import {Observable} from 'rxjs';
import {QuestionService} from '../@core/service/question.service';
import {QuestionBase} from '../@core/model/question-base';
import {AsyncPipe} from '@angular/common';

@Component({
  imports: [
    DynamicFormComponent,
    AsyncPipe
  ],
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent {
  questions$: Observable<QuestionBase<any>[]>;

  constructor(service: QuestionService) {
    this.questions$ = service.getQuestions();
  }
}
