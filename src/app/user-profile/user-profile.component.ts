import {Component, effect, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
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
export class UserProfileComponent implements OnInit, OnChanges {
  @Input() userId: any;
  @Output() user$!: Observable<User>;

  constructor(private readonly userService: UserService) {
  }

  ngOnInit(): void {
    // this.user$ = this.userService.getUser(this.userId);
  }

  ngOnChanges(changes: SimpleChanges) {
    // 检查inputData属性的变化
    if (changes['userId']) {
      console.log('userId changed:', changes['userId'].currentValue);
      // 在这里可以添加对输入数据变化的处理逻辑
      if (!this.userId) return;
      this.user$ = this.userService.getUser(this.userId);
    }
  }
}
