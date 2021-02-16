import { Component } from '@angular/core';
declare var $;

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bootstrap-basic';

}
