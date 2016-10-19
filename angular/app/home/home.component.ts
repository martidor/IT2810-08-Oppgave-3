import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  

  styleUrls: ['home.component.css'],

  template: ` 
 	<div class = "home">
 		<h2> Børsoversikten </h2>
    	<img alt="osloborschart" id="homechart" src="http://www.norcap.no/img/filarkiv/Image/graf_Oslo_Bors_november_2014.png"/>
	</div>`,

})
export class HomeComponent {
	
}


