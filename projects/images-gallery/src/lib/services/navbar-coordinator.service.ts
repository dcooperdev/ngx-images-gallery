import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavbarCoordinatorService {

  private _navbarOrientation = new BehaviorSubject<boolean>(false);
  readonly navbarOrientation = this._navbarOrientation.asObservable();

  constructor() { }

  setStatus(status) {
    this._navbarOrientation.next(status);
  }
}
