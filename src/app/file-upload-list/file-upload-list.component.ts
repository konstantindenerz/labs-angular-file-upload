import { Component, OnInit } from '@angular/core';
import {FileUploadService} from "../shared/file-upload.service";

@Component({
  selector: 'labs-file-upload-list',
  templateUrl: './file-upload-list.component.html',
  styleUrls: ['./file-upload-list.component.scss']
})
export class FileUploadListComponent implements OnInit {

    constructor(public fileUploadService: FileUploadService) { }

    ngOnInit(): void {
    }

}
