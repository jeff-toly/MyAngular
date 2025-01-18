import {Component, effect, model, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AsyncPipe, NgIf} from '@angular/common';
import {UserService} from '../@core/service/user.service';
import {User} from '../@core/model/user';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  imports: [
    AsyncPipe,
    NgIf,
    FormsModule
  ],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit {
  userId = model('DD8719E3A711454BA4776AB8D0D52AE7');
  user$!: Observable<User>;

  constructor(private readonly userService: UserService) {
    effect(() => {
      if (!this.userId()) return;
      this.user$ = this.userService.getUser(this.userId());
    });
  }

  ngOnInit(): void {
    this.user$ = this.userService.getUser(this.userId());
  }
}
