import { Component, Input, OnInit } from '@angular/core';
import { Resume } from '../../interfaces/resume';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {

  @Input() person!: Resume;

  constructor() { }
}
