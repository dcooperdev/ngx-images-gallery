# ngx-images-galley

ngx-images-galley is my first Angular library for images galleries.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install ngx-images-galley.

```bash
npm install ngx-images-galley --save
```

## Import

```javascript
import { ImagesGalleryModule} from 'images-gallery';

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
<ngx-images-gallery [navbarOrientation]="horizontal">
    <ngx-navbar
        [imageWidth]="'64px'" // height for the thumbnails
        [imageHeight]="'64px'" // widht for the thumbnails
        [images]="elements" // array of images of type Image
        [maxImages]="6" // maximum amount of thumbnails(this are maxImages - 1 thumbnails and one mosaic with hidden items
        [hideOnMobile]="true" // hide navigation arrows in mobile
    ></ngx-navbar>
</ngx-images-gallery>
<ngx-lightbox></ngx-lightbox>
```
## Interfaces
```javascript
export interface Image {
    url: string;
    name: string;
}
```
## Icons
In assets folder create a folder named "images-gallery-arrows" and puts a "left.svg" icon for left arrow, "right.svg" icon for right arrow and "close.svg" icon for close button in lightbox