import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public isOpen: boolean;
  constructor() {
    this.isOpen = true;
  }
  public open(): void {
      this.isOpen = !this.isOpen;
  }

}
