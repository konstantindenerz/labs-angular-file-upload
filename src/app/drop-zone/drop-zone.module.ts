import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DropZoneComponent} from './drop-zone.component';
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    DropZoneComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [DropZoneComponent]
})
export class DropZoneModule {
}
