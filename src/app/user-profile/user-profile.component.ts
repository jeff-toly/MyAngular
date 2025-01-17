import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AsyncPipe, NgIf} from '@angular/common';
import {UserService} from '../@core/service/user.service';
import {User} from '../@core/model/user';

@Component({
  selector: 'app-user-profile',
  imports: [
    AsyncPipe,
    NgIf
  ],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit {
  @Input() userId!: string;
  user$!: Observable<User>;

  constructor(private readonly userService: UserService) {
  }

  ngOnInit(): void {
    this.user$ = this.userService.getUser(this.userId);
  }
}
