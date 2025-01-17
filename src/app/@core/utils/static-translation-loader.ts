import {TranslateLoader, Translation, TranslationObject} from '@ngx-translate/core';
import {Observable, of} from 'rxjs';

import * as TranslationsCN from '../../../../public/i18n/cn.json';
import * as TranslationsTW from '../../../../public/i18n/tw.json';
import * as TranslationsEN from '../../../../public/i18n/en.json';

const TRANSLATIONS: Translation = {
  en: TranslationsEN,
  cn: TranslationsCN,
  tw: TranslationsTW,
};

export class StaticTranslationLoader implements TranslateLoader {
  public getTranslation(lang: string): Observable<TranslationObject> {
    const translation = TRANSLATIONS[lang];
    if (translation) {
      return of(translation);
    } else {
      console.error(`Unknown language: ${lang}`);
      return of({});
    }
  }
}
