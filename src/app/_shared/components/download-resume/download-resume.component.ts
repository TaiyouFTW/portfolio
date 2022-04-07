import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-download-resume',
  templateUrl: './download-resume.component.html',
  styleUrls: ['./download-resume.component.scss']
})
export class DownloadResumeComponent implements OnInit {

  @Input() name!: string;

  constructor() { }

  ngOnInit(): void {
  }

  download(filename: string) {
    let url = 'assets/resume.pdf';
    const link = document.createElement("a");
    link.href = url;
    link.download = `${filename}.pdf`;
    link.click();
  }
}
