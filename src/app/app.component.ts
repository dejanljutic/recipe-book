import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  featureToRender: string = 'recipe';

  onNavigate(feature: string) {
    this.featureToRender = feature;
  }
}
