import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FileUploadListComponent} from './file-upload-list.component';
import {MatListModule} from "@angular/material/list";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    FileUploadListComponent
  ],
  exports: [
    FileUploadListComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class FileUploadListModule {
}
