import { Component, OnInit } from '@angular/core';
import { Resume } from '../_shared/interfaces/resume';
import { ResumeService } from '../_shared/services/resume.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  person: Resume = {} as Resume;

  since: Date;

  constructor(private resumeService: ResumeService) {
    this.since = new Date();

    this.resumeService.get().subscribe(resume => {
      this.person = resume
      this.since.setFullYear(this.since.getFullYear() - this.person.yearsOfExperience);
    });
  }

  ngOnInit(): void {
  }

}
