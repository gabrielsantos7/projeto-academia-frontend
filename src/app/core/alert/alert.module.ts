import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertPopupComponent } from './alert-popup/alert-popup.component';



@NgModule({
  declarations: [
    AlertPopupComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlertPopupComponent
  ]
})
export class AlertModule { }
