import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { FileUploadService } from './file-upload.service';
import { FileUploadDetails } from './FileUploadDetails';
import { CategoryService } from './category.service';
import { Category } from './Category';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  fileUploadForm: FormGroup;
  categories: Category [];
  isUploading: boolean;

  @ViewChild('file') file;
  sizeOfSelectedFile: number = 0;
  SIZE_OF_5MB_FILE: number = 5242880;
  fileTooBig: boolean = false;
  fileDetail: File;
  fileToUploadName: string = '';

  constructor(private fb: FormBuilder,
              private categoryService: CategoryService,
              private uploaderService: FileUploadService,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.initialiseForm();
    this.initialiseCategories();
  }

  private initialiseForm(): void {
    this.fileUploadForm = this.fb.group({
      fileName: new FormControl('', [Validators.required]),
      selectedFile: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      termsAgreed: new FormControl('', [Validators.requiredTrue])
    });
  }

  private initialiseCategories(): void {
    this.categories = this.categoryService.getCategories();
  }

  get fileName(): AbstractControl {
    return this.fileUploadForm.get('fileName');
  }

  get selectedFile(): AbstractControl {
    return this.fileUploadForm.get('selectedFile');
  }

  get category(): AbstractControl {
    return this.fileUploadForm.get('category');
  }

  get termsAgreed(): AbstractControl {
    return this.fileUploadForm.get('termsAgreed');
  }

  selectFileClicked(): void {
    this.fileUploadForm.get('selectedFile').markAsDirty();
  }

  fileSelected(): void {
    console.log('file selected', this.file);
    this.sizeOfSelectedFile = 0;
    this.fileDetail = null;
    this.fileToUploadName = '';
    this.fileTooBig = false;

    if (this.file.nativeElement.files[0]) {
      this.sizeOfSelectedFile = this.file.nativeElement.files[0].size;
      this.fileDetail = this.file.nativeElement.files[0];
      this.fileToUploadName = this.fileDetail.name;
    }

    if (this.sizeOfSelectedFile > this.SIZE_OF_5MB_FILE) {
      this.file.nativeElement.value = null;
      this.fileToUploadName = '';
      this.fileTooBig = true;
    }
  }

  onSubmit(form: any): void {
    console.log('form', form);
    const fileDetails: FileUploadDetails = {
      fileName: form.fileName,
      category: form.category,
      file: this.fileDetail
    };
    this.isUploading = true;
    this.uploaderService.upload(fileDetails).subscribe(
      (response) => {
        this.isUploading = false;
        this.snackBar.open('Your file has been uploaded successfully', 'Ok');
      },
      (error) => {
        this.isUploading = false;
        this.snackBar.open(`oops looks like there's been a problem uploading your file`, 'Ok');
      });
  }

  resetForm() {
    this.fileUploadForm.reset({});
    this.fileToUploadName = '';
  }
}
