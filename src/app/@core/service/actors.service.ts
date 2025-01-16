import {Observable, of} from 'rxjs';
import {Injectable} from "@angular/core";

export interface ActorsService {
    isRoleTaken: (role: string) => Observable<boolean>;
}

@Injectable({providedIn: 'root'})
export class ActorsServiceImpl implements ActorsService {
    isRoleTaken(role: string): Observable<boolean> {
        return of(true);
    }
}
