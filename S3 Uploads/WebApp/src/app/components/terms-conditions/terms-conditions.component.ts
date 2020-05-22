import { Component, OnInit } from '@angular/core';
import { TermsConditionsService } from './terms-conditions.service';

@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.scss']
})
export class TermsConditionsComponent implements OnInit {

  terms: string;

  constructor(public termsService: TermsConditionsService) { }

  ngOnInit(): void {
    this.terms = this.termsService.getTermsAndConditions();
  }

}
