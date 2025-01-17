import {Component} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [],
  styleUrl: './login.component.css'
})
export class LoginComponent {
  editable: boolean;

  constructor() {
    this.editable = true;
  }

  onSubmit($event: SubmitEvent) {
    console.log('onSubmit', $event);
  }

  onChange($event: Event) {
    console.log('onChange', $event);
  }
}
