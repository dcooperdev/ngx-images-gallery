import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Image } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class StatusCoordinatorService {

  private _imageSelected = new BehaviorSubject<Image>({ url: '', name: '' });
  readonly imageSelected = this._imageSelected.asObservable();
  private images: Image[] = [];
  private index: number = 0;

  constructor() { }

  setImages(imgs: Image[]) {
    this.images = imgs;
    this.index = 0;
    this._imageSelected.next(this.images[this.index]);
  }

  getImages(): Image[] {
    return this.images;
  }

  getSelectedImage(): Observable<Image> {
    return this._imageSelected.asObservable();
  }

  setSelectedImage(img: Image) {
    this.images.find((image, index) => {
      if (image.url === img.url) {
        this.index = index;
        return;
      }
      return;
    });
    this._imageSelected.next(img);
  }

  nextImage() {
    if (this.images.length - 1 >= (this.index + 1)) {
      this.index++;
    } else if (this.images.length - 1 < (this.index + 1)) {
      this.index = 0;
    }
    this._imageSelected.next(this.images[this.index]);
  }
  previousImage() {
    if ((this.index - 1) >= 0) {
      this.index = this.index - 1;
    } else if ((this.index - 1) < 0) {
      this.index = this.images.length - 1;
    }
    this._imageSelected.next(this.images[this.index]);
  }
}
