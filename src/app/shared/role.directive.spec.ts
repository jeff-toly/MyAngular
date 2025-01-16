import {UniqueRoleValidator, UniqueRoleValidatorDirective} from './role.directive';
import {ActorsService} from '../@core/service/actors.service';
import {Observable, of} from 'rxjs';

describe('UniqueRoleValidatorDirective', () => {
  it('should create an instance', () => {
    const directive = new UniqueRoleValidatorDirective(new UniqueRoleValidator(new class implements ActorsService {
      isRoleTaken(role: string): Observable<boolean> {
        return of(true);
      }
    }));
    expect(directive).toBeTruthy();
  });
});
