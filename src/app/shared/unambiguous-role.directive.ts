import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn,} from '@angular/forms';

/** An actor's name can't match the actor's role */
export const unambiguousRoleValidator: ValidatorFn = (
  control: AbstractControl,
): ValidationErrors | null => {
  const name = control.get('name');
  const role = control.get('role');
  return name && role && name.value === role.value ? {unambiguousRole: true} : null;
};

@Directive({
  selector: '[appUnambiguousRole]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: UnambiguousRoleDirective, multi: true},
  ],
})
export class UnambiguousRoleDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return unambiguousRoleValidator(control);
  }
}
