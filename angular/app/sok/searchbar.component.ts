import { Component } from  '@angular/core'

@Component({
  moduleId: module.id,
  selector: 'my-app',
  

  styleUrls: ['sok.component.css'],

  template: ` 
 	<div class = "search">
 		<div class ="searchbar">
 			<input type="text" ng-model="searchtext" />
 		</div>
	</div>`,

})
export class SokComponent {
	
}
