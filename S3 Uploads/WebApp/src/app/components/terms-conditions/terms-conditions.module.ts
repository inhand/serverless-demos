import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermsConditionsComponent } from './terms-conditions.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatExpansionModule } from '@angular/material/expansion';



@NgModule({
  declarations: [TermsConditionsComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatExpansionModule
  ],
  exports: [TermsConditionsComponent]
})
export class TermsConditionsModule { }
