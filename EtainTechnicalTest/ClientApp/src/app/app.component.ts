import { Component } from '@angular/core';
import * as PullToRefresh from 'pulltorefreshjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  ptrinit:any = PullToRefresh.init();
}
