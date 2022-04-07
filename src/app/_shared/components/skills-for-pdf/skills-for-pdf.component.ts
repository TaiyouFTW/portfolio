import { Component, Input } from '@angular/core';
import { Skills } from '../../interfaces/skills';

@Component({
  selector: 'app-skills-for-pdf',
  templateUrl: './skills-for-pdf.component.html',
  styleUrls: ['./skills-for-pdf.component.scss']
})
export class SkillsForPdfComponent {

  @Input() skills!: Skills[];

  constructor() { }

}
