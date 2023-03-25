import { Component } from '@angular/core';
import { LoaderService } from '../../services/loader/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {

  public show: boolean;
  constructor(private _loaderService: LoaderService) {
    this.show = true
  }

  ngOnInit() {
    this._loaderService.loadState.subscribe(res => {
      this.show = res;
    });
  }
}
