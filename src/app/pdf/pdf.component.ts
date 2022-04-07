import { Component, ElementRef, ViewChild } from '@angular/core';
import { Resume } from '../_shared/interfaces/resume';
import { ResumeService } from '../_shared/services/resume.service';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss']
})
export class PdfComponent {

  person: Resume = {} as Resume;

  since: Date;

  @ViewChild('pdf') pdfId!: ElementRef;

  constructor(private resumeService: ResumeService) {
    this.since = new Date();

    this.resumeService.get().subscribe(resume => {
      this.person = resume
      this.since.setFullYear(this.since.getFullYear() - this.person.yearsOfExperience);
    });
  }

  exportHtmlToPDF() {
    html2canvas(this.pdfId.nativeElement).then(canvas => {

      let docWidth = 208;
      let docHeight = canvas.height * docWidth / canvas.width;

      const contentDataURL = canvas.toDataURL('image/png')
      let doc = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      doc.addImage(contentDataURL, 'PNG', 0, position, docWidth, docHeight)

      doc.save('resume.pdf');
    });

  }
}
