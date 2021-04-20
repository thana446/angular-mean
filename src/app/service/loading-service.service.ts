import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  constructor() { }

  startLoading() {
    this.loading$.next(true)
  }

  stopLoading() {
    this.loading$.next(false)
  }

  getLoading() {
    return this.loading$
  }
}
