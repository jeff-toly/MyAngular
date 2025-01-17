import {Component} from '@angular/core';
import {ChildrenOutletContexts, RouterOutlet} from "@angular/router";
import {slideInAnimation} from '../animations';

@Component({
  selector: 'app-shared-content',
  imports: [
    RouterOutlet
  ],
  animations: [
    slideInAnimation,
    // animation triggers go here
  ],
  templateUrl: './shared-content.component.html',
  styleUrl: './shared-content.component.css'
})
export class SharedContentComponent {
  constructor(private readonly contexts: ChildrenOutletContexts) {
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
