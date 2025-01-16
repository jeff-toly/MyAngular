import {Directive, forwardRef, Injectable} from '@angular/core';
import {AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors,} from '@angular/forms';
import {catchError, map} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {ActorsServiceImpl} from '../@core/service/actors.service';

@Injectable({providedIn: 'root'})
export class UniqueRoleValidator implements AsyncValidator {
  constructor(private readonly actorsService: ActorsServiceImpl) {
  }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.actorsService.isRoleTaken(control.value).pipe(
      map((isTaken) => (isTaken ? {uniqueRole: true} : null)),
      catchError(() => of(null)),
    );
  }
}

@Directive({
  selector: '[appUniqueRole]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => UniqueRoleValidatorDirective),
      multi: true,
    },
  ],
})
export class UniqueRoleValidatorDirective implements AsyncValidator {
  constructor(private readonly validator: UniqueRoleValidator) {
  }

  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.validator.validate(control);
  }
}
