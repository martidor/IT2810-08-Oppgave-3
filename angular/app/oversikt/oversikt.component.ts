import { Component } from  '@angular/core'

@Component({
  moduleId: module.id,
  selector: 'oversikt',
  template: '<h1>Oversikt</h1>',
  styleUrls: ['oversikt.component.css']
})
export class OversiktComponent {
  title: string = "Dette er oversikt siden";
  body: string = "Oversiktskroppen";
}
