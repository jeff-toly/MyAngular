import {Component} from '@angular/core';
import {WatermarkComponent} from './watermark/watermark.component';
import {SharedHeaderComponent} from './shared-header/shared-header.component';
import {SharedNavigationComponent} from './shared-navigation/shared-navigation.component';
import {SharedContentComponent} from './shared-content/shared-content.component';
import {SharedFooterComponent} from './shared-footer/shared-footer.component';

@Component({
  selector: 'app-root',
  imports: [
    WatermarkComponent,
    SharedHeaderComponent,
    SharedNavigationComponent,
    SharedContentComponent,
    SharedFooterComponent
  ],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'intelligent finance&tax and audit platform'; // 智能财税和智慧审计平台
}
