import { Component, Input } from '@angular/core';
import { Education } from '../../interfaces/education';

@Component({
  selector: 'app-educations',
  templateUrl: './educations.component.html',
  styleUrls: ['./educations.component.scss']
})
export class EducationsComponent {

  @Input() educations!: Education[];
  @Input() color!: string;

  constructor() { }
}
