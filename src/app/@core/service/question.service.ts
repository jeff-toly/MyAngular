import {Injectable} from '@angular/core';
import {QuestionBase} from '../model/question-base';
import {DropdownQuestion} from '../model/question-dropdown';
import {TextboxQuestion} from '../model/question-textbox';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor() {
  }

  // TODO: get from a remote source of question metadata
  getQuestions() {
    const questions: QuestionBase<string>[] = [
      new DropdownQuestion({
        key: 'favoriteAnimal',
        label: 'Favorite Animal',
        options: [
          {key: 'cat', value: 'Cat'},
          {key: 'dog', value: 'Dog'},
          {key: 'horse', value: 'Horse'},
          {key: 'capybara', value: 'Capybara'},
        ],
        order: 3,
      }),
      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Alex',
        required: true,
        order: 1,
      }),
      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2,
      }),
    ];
    return of(questions.slice().sort((a, b) => a.order - b.order));
  }
}
