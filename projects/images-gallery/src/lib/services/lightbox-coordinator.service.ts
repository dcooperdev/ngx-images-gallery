import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LightboxCoordinatorService {

  private _lightboxStatus = new BehaviorSubject<boolean>(false);
  readonly lightboxStatus = this._lightboxStatus.asObservable();

  constructor() { }

  toggle(status: boolean) {
    this._lightboxStatus.next(status);
  }
}
