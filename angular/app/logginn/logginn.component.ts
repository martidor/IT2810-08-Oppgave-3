import { Component } from  '@angular/core'

@Component({
  moduleId: module.id,
  selector: 'my-app',
  
  styleUrls: ['logginn.component.css'],
  template: `
	<div class="logginn">

		<h2>Logg inn:</h2>
		<button ng-href="#">Logg inn med facebook</button>
	</div>

	 `
})
export class LoggInnComponent {

}
