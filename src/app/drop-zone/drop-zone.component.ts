import {Component, HostListener, OnInit} from '@angular/core';
import {FileUploadService} from "../shared/file-upload.service";

@Component({
  selector: 'labs-drop-zone',
  templateUrl: './drop-zone.component.html',
  styleUrls: ['./drop-zone.component.scss']
})
export class DropZoneComponent implements OnInit {

  constructor(private fileUploadService: FileUploadService) { }

  ngOnInit(): void {
  }

  @HostListener('dragover', ['$event'])
  dragover(event: DragEvent): void{
    event.preventDefault();
  }

  @HostListener('drop', ['$event'])
  drop(event: DragEvent): void{
    event.preventDefault();
    this.fileUploadService.upload(event.dataTransfer!.files);
  }
}
