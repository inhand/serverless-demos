import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TermsConditionsService {

  terms: string = `You agree that the file to upload is not subject to any copyright restrictions and is not unlawful in any way.`;

  constructor() { }

  getTermsAndConditions() {
    return this.terms;
  }
}
