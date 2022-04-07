import { Component, Input } from '@angular/core';
import { Experience } from '../../interfaces/experience';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent {

  @Input() experiences!: Experience[];

  constructor() { }
}
