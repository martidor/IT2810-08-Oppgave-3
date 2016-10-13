import { Component } from  '@angular/core'

@Component({
  moduleId: module.id,
  selector: 'oversikt',
  templateUrl: 'oversikt.component.html',
  styleUrls: ['oversikt.component.css']
})
export class OversiktComponent {
  title: string = "Dette er oversikt siden";
  body: string = "Oversiktskroppen";
}