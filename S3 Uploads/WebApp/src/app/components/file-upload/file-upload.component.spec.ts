import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadComponent } from './file-upload.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('FileUploadComponent', () => {
  let component: FileUploadComponent;
  let fixture: ComponentFixture<FileUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FileUploadComponent],
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatSnackBarModule,
        MatSelectModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create the file upload form', () => {
    const fileUploadForm = component.fileUploadForm;
    expect(fileUploadForm).toBeTruthy();
  });

  it('should create the file upload form with fileName, selectedFile, category, termsAgreed', () => {
    const fileUploadForm: FormGroup = component.fileUploadForm;
    expect(fileUploadForm.get('fileName')).toBeTruthy();
    expect(fileUploadForm.get('selectedFile')).toBeTruthy();
    expect(fileUploadForm.get('category')).toBeTruthy();
    expect(fileUploadForm.get('termsAgreed')).toBeTruthy();
  });

  // Skip the form valid test until we can mock the file selector
  // it('should have form valid', () => {
  //   const fileUploadForm: FormGroup = component.fileUploadForm;
  //   const blob = new Blob([''], {type: 'text/html'});
  //   blob['name'] = 'fred.txt';
  //   const testFile = <File> blob;
  //   component.file = testFile;
  //   fileUploadForm.get('fileName').setValue('fred.pdf');
  //   fileUploadForm.get('selectedFile').setValue(true);
  //   fileUploadForm.get('category').setValue('systemA');
  //   fileUploadForm.get('termsAgreed').setValue('true');
  //
  //   expect(fileUploadForm.valid).toBeTruthy();
  // });

});
