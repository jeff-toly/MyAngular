import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule, Validators} from '@angular/forms';
import {NgIf} from '@angular/common';
import {ForbiddenNameDirective, forbiddenNameValidator} from '../shared/forbidden-name.directive';
import {UnambiguousRoleDirective, unambiguousRoleValidator} from '../shared/unambiguous-role.directive';
import {UniqueRoleValidator, UniqueRoleValidatorDirective} from '../shared/role.directive';

@Component({
  selector: 'app-actor-form-template',
  imports: [
    FormsModule,
    NgIf,
    ForbiddenNameDirective,
    UniqueRoleValidatorDirective,
    UnambiguousRoleDirective
  ],
  templateUrl: './actor-form-template.component.html',
  styleUrl: './actor-form-template.component.css'
})
export class ActorFormTemplateComponent implements OnInit {
  skills = ['Method Acting', 'Singing', 'Dancing', 'Swordfighting'];
  actor = {name: 'Tom Cruise', role: 'Romeo', skill: this.skills[3]};
  actorForm!: FormGroup;

  ngOnInit(): void {
    const roleControl = new FormControl('', {
      asyncValidators: [this.roleValidator.validate.bind(this.roleValidator)],
      updateOn: 'blur',
    });
    roleControl.setValue(this.actor.role);

    this.actorForm = new FormGroup({
      name: new FormControl(this.actor.name, [
        Validators.required,
        Validators.minLength(4),
        forbiddenNameValidator(/bob/i), // <-- Here's how you pass in the custom validator.
      ]),
      role: new FormControl(this.actor.role, {updateOn: 'blur'}),
      skill: new FormControl(this.actor.skill, Validators.required),
    }, {validators: unambiguousRoleValidator});
  }

  get name() {
    return this.actorForm.get('name');
  }

  get skill() {
    return this.actorForm.get('skill');
  }

  constructor(private readonly roleValidator: UniqueRoleValidator) {}
}
