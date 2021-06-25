import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadTriggerComponent } from './file-upload-trigger.component';

describe('FileUploadTriggerComponent', () => {
  let component: FileUploadTriggerComponent;
  let fixture: ComponentFixture<FileUploadTriggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileUploadTriggerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadTriggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
