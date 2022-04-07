import { Component, Input } from '@angular/core';
import { Project } from '../../interfaces/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  @Input() projects!: Project[];

  constructor() { }
}
