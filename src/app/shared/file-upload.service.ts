import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {HttpClient, HttpEvent, HttpEventType} from "@angular/common/http";

interface FileUploadItem {
  canceled?: boolean;
  cancel: () => void;
  file: File;
  progress: number;
}

@Injectable({providedIn: 'root'})
export class FileUploadService {
  files$$ = new BehaviorSubject<FileUploadItem[]>([]);
  uploadQueue: FileUploadItem[] = [];
  uploading = false;

  constructor(private httpClient: HttpClient) {
  }

  upload(files: FileList): void {
    const items = this.files$$.value;
    for (let file of Array.from(files)) {
      const fileItem: FileUploadItem = {file, progress: 0, cancel: () => void 0};
      items.push(fileItem);
      this.uploadQueue.push(fileItem);
    }
    this.triggerUpload();
  }

  triggerUpload(): void {
    if (!this.uploading && this.uploadQueue.length) {
      const next = this.uploadQueue.splice(0, 1)[0];
      console.log(next);
      this.uploadFile(next);
    }
  }


  private uploadFile(fileItem: FileUploadItem): void {
    this.uploading = true;
    const formData = new FormData();
    formData.append("file", fileItem.file);
    const upload$ = this.httpClient.post("http://localhost:3000/upload", formData, {
      reportProgress: true,
      observe: 'events'
    });

    const subscription = upload$.subscribe((event: HttpEvent<any>) => {
      if (event.type == HttpEventType.UploadProgress) {
        fileItem.progress = Math.round(100 * (event.loaded / event.total!));
      } else if (event.type === HttpEventType.Response) {
        this.uploading = false;
        this.triggerUpload();
      }
    })

    fileItem.cancel = () => {
      subscription.unsubscribe();
      fileItem.canceled = true;
    };

  }
}
