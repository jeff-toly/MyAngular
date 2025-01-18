import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {DataService} from './data.service';


@Injectable({providedIn: 'root'})
export class UserService {
  constructor(private readonly dataService: DataService) {
  }

  getUser(id: string): Observable<any> {
    return this.dataService.getData(`user/${id}`);
  }
}
