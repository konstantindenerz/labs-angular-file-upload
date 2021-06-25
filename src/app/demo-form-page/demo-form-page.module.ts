import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DemoFormPageComponent} from './demo-form-page.component';
import {RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {FileUploadTriggerModule} from "../file-upload-trigger/file-upload-trigger.module";
import {FileUploadListModule} from "../file-upload-list/file-upload-list.module";
import {DropZoneModule} from "../drop-zone/drop-zone.module";

@NgModule({
  declarations: [
    DemoFormPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: DemoFormPageComponent}]),
    FileUploadTriggerModule,
    FileUploadListModule,
    DropZoneModule
  ],
  exports: [DemoFormPageComponent]
})
export class DemoFormPageModule {
}
