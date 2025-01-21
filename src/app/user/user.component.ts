import {Component, Input} from '@angular/core';
import {UserProfileComponent} from '../user-profile/user-profile.component';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [
    UserProfileComponent,
    FormsModule
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() user = {userId: 'D26CF7ECBA0E42F7A2229910CF3ED704', userName: '', email: ''};
}
