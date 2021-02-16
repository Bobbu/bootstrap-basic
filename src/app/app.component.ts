import { Component } from '@angular/core';

///////////////////////////////////////////////////////////////////////////////
// The following are so that tooltips displatys on the template of this
// component can take on the Bootstrap look and popper behavior. Repeat in as
// many components as might need it.
declare var $;

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
///////////////////////////////////////////////////////////////////////////////

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bootstrap-basic';

}
