import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FileUploadService} from "../shared/file-upload.service";

@Component({
  selector: 'labs-file-upload-trigger',
  templateUrl: './file-upload-trigger.component.html',
  styleUrls: ['./file-upload-trigger.component.scss']
})
export class FileUploadTriggerComponent implements OnInit {
  @ViewChild('input') input?: ElementRef;

  constructor(private fileUploadService: FileUploadService) {
  }

  ngOnInit(): void {
  }

  showUpload() {
    this.input?.nativeElement.click();
  }

  selectionChanged(event: Event): void {
    const input = event.target as HTMLInputElement;
    const {files} = input;

    if (files) {
      this.fileUploadService.upload(files);
    }
  }
}
