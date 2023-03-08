import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public none: boolean;
  public block: boolean;
  constructor() {
    this.none = false;
    this.block = true
  }
  public open(): void {
    this.none = true;
    this.block = false

  }
  public close(): void {
    this.none = false;
    this.block = true
  }
}
