import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertPopupComponent } from './alert-popup/alert-popup.component';
import { AlertInfoComponent } from './alert-info/alert-info.component';

@NgModule({
  declarations: [
    AlertPopupComponent,
    AlertInfoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlertPopupComponent,
    AlertInfoComponent
  ]
})
export class AlertModule { }
