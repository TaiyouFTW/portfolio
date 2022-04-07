import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resume } from '../interfaces/resume';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  private fileUrl: string = 'assets/resume.json';

  constructor(protected httpClient: HttpClient) {
  }

  get() {
    return this.httpClient.get<Resume>(this.fileUrl);
  }
}
