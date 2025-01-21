import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  standalone: true,
  name: 'base64ToHex',
})

export class Base64ToHexPipe implements PipeTransform {
  transform(base64: string): string {
    let raw = atob(base64);
    let res = '';
    for (let i = 0; i < raw.length; i++) {
      let hex = raw.charCodeAt(i).toString(16);
      res += (hex.length === 2 ? hex : '0' + hex);
    }
    return res.toUpperCase();
  }
}
