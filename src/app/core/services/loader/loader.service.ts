import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LoaderService {
  private loadCount: number = 0;
  loadState: BehaviorSubject<boolean> = new BehaviorSubject(false);

  /**
   * Show loader 
   */
  ShowLoader() {
    this.loadCount += 1;
    this.loadState.next(true);
  }
/**
 * hide loader
 */
  HideLoader() {
    this.loadCount = (this.loadCount ? --this.loadCount : 0);
    if (!this.loadCount) this.loadState.next(false);
  }
}
