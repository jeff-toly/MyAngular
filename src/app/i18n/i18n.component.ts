import {Component, OnDestroy} from '@angular/core';
import {TranslateDirective, TranslatePipe, TranslateService} from '@ngx-translate/core';
import { marker as _ } from '@colsen1991/ngx-translate-extract-marker';
import {Subscription} from 'rxjs';
import {FormsModule} from '@angular/forms';
import defaultLanguage from '../../../public/i18n/cn.json';

@Component({
  selector: 'app-i18n',
  imports: [
    TranslatePipe,
    TranslateDirective,
    FormsModule
  ],
  templateUrl: './i18n.component.html',
  styleUrl: './i18n.component.css'
})
export class I18nComponent implements OnDestroy {
  constructor(private readonly translate: TranslateService) {
    const arr_lang = ['tw', 'cn', 'en'];

    this.translate.addLangs(arr_lang);
    this.translate.setTranslation('cn', defaultLanguage);
    this.translate.setDefaultLang('cn');

    const lang = this.translate.getBrowserLang();
    this.translate.use(lang && arr_lang.includes(lang) ? lang : "cn");

    this.subscription = translate.stream(_('demo.interpolation.pipe-with-parameters'), {name: 'John'}).subscribe((text: string) => {
      console.log(`using stream(): ${text}`);
    });
  }

  useLanguage(language: string): void {
    this.translate.use(language);
    this.translate.get(_('demo.interpolation.pipe-with-parameters'), {name: 'John'}).subscribe((text: string) => {
      console.log(`using get(): ${text}`);
    });
    const text = this.translate.instant(_('demo.interpolation.pipe-with-parameters'), {name: 'John'})
    console.log(`using instant(): ${text}`);

    this.translate.get(_('demo.interpolation.pipe-with-parameters'), {name: 'John'}).subscribe((text: string) => {
      console.log(`using get(): ${text}`);

      // translations are already loaded - you can now use instant()
      const text2 = this.translate.instant(_('demo.interpolation.pipe-with-parameters'), {name: 'John'})
      console.log(`using instant() inside the promise: ${text2}`);
    });
  }

  name = "Andreas";
  private readonly subscription: Subscription;

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  count: any;
  gender: any;

  onGenderChange($event: Event) {

  }

  onCountChange($event: Event) {

  }
}
