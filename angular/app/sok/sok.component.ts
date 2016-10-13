import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  

  styleUrls: ['sok.component.css'],

  template: ` 
 	<div class = "search">
 		<div class ="searchbar">
 			<input type="text" ng-model="searchtext" />
 		</div>

 		<div class="searchdisplay">
	 		<p> result1	</p>
	 		<p> result2 </p>
 		</div>

	</div>`,

})
export class SokComponent {
	
}
