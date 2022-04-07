import { Component, Input, OnInit } from '@angular/core';
import { Skills } from '../../interfaces/skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  @Input() skills!: Skills[];

  constructor() { }
}
