import { Component, OnInit } from '@angular/core';
import {FileUploadService} from "../shared/file-upload.service";

@Component({
  selector: 'labs-demo-form-page',
  templateUrl: './demo-form-page.component.html',
  styleUrls: ['./demo-form-page.component.scss']
})
export class DemoFormPageComponent implements OnInit {

  constructor(public fileUploadService: FileUploadService) { }

  ngOnInit(): void {
  }

}
