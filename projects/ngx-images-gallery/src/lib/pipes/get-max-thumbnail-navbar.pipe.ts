import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getMaxThumbnailNavbar'
})
export class GetMaxThumbnailNavbarPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    console.log(value, ...args);
    const [maxImages] = args;
    if (maxImages) {
      return value.slice(0, maxImages);
    }
    return value;
  }
}
