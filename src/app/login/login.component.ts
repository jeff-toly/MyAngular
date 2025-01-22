import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {JsonPipe, NgForOf} from '@angular/common';
import {User} from '../@core/model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [
    ReactiveFormsModule,
    NgForOf,
    FormsModule,
    JsonPipe
  ],
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @Input() editable: boolean;
  @Input() user: User = {id: '', userName: '', email: '', remark: '', role: ''};
  @Input() roles = [
    {value: '', label: '==Please Select=='},
    {value: 'admin', label: 'Administrator'},
    {value: 'common', label: 'Common User'},
    {value: 'assignee', label: 'Assignee'}
  ];

  constructor(private readonly formBuilder: FormBuilder) {
    this.editable = false;
  }

  onSubmit($event: SubmitEvent) {
    console.log('onSubmit', $event);
  }

  onChange($event: Event) {
    console.log('onChange', $event);
  }

  changeForm() {
    this.editable = !this.editable;
  }
}
