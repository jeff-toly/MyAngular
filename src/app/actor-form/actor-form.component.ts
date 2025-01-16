import {Component} from '@angular/core';
import {Actor} from '../@core/model/actor';
import {JsonPipe} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-actor-form',
  templateUrl: './actor-form.component.html',
  imports: [
    JsonPipe,
    FormsModule
  ]
})
export class ActorFormComponent {
  skills = ['Method Acting', 'Singing', 'Dancing', 'Swordfighting'];
  model = new Actor(18, 'Tom Cruise', this.skills[3], 'CW Productions');
  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  newActor() {
    this.model = new Actor(42, '', '');
  }

  heroine(): Actor {
    const myActress = new Actor(42, 'Marilyn Monroe', 'Singing');
    console.log('My actress is called ' + myActress.name); // "My actress is called Marilyn"
    return myActress;
  }

  //////// NOT SHOWN IN DOCS ////////
  // Reveal in html:
  //   Name via form.controls = {{showFormControls(actorForm)}}
  showFormControls(form: any) {
    return form && form.controls.name && form.controls.name.value; // Tom Cruise
  }

  /////////////////////////////
}
