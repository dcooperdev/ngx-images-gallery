# ngx-images-galley

ngx-images-galley is my first Angular library for images galleries.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install ngx-images-galley.

```bash
npm install ngx-images-galley --save
```

## Import

```javascript
import { ImagesGalleryModule} from 'ngx-images-gallery';

@NgModule({
  ...,
  imports: [
    ImagesGalleryModule,
    ...
  ]
})
export class AppModule { }
```
## Usage
```html5
<ngx-images-gallery
  [navbarOrientation]="true" // true: horizontal | false: vertical
  [selectedImage]="selectedImage" //deprecated
>
    <ngx-navbar
      [imageWidth]="'64px'"
      [imageHeight]="'64px'"
      [images]="elements" //array of images
      [maxImages]="6"
    ></ngx-navbar>
</ngx-images-gallery>
```
## Interfaces
```javascript
export interface Image {
    url: string;
    name: string;
}
```