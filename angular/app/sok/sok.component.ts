import { Component } from  '@angular/core'

@Component({
  moduleId: module.id,
  selector: 'my-app',
  

  styleUrls: ['sok.component.css']

  template: ` 
  <div>
  		
  		<input type="text" ng-model="thetext" />
  		<p>{{thetext}}</p>
  		<p> down here </p>
  		<p>{{bajs}} , du </p>
  		
<div ng-app="">
  <form>
    <input type="text" ng-model="firstname">
  </form>
  <h1>You entered: {{firstname}}</h1>
</div>


	</div>`,

})
export class SokComponent {
	bajs = 'hei';
}
