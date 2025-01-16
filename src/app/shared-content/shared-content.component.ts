import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-shared-content',
    imports: [
        RouterOutlet
    ],
  templateUrl: './shared-content.component.html',
  styleUrl: './shared-content.component.css'
})
export class SharedContentComponent {

}
