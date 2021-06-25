import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FileUploadTriggerComponent} from './file-upload-trigger.component';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    FileUploadTriggerComponent
  ],
  imports: [
    CommonModule, MatButtonModule
  ],
  exports: [FileUploadTriggerComponent]
})
export class FileUploadTriggerModule {
}
