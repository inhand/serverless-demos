import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { FileUploadDetails } from './FileUploadDetails';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(public httpClient: HttpClient) {
  }

  upload(fileUploadDetails: FileUploadDetails): Observable<any> {

    const headers = new HttpHeaders({'Content-Type': fileUploadDetails.file.type});

    return this.httpClient.post(`${environment.baseUrl}/uploadurl`, {
      fileMimeType: fileUploadDetails.file.type,
      fileName: fileUploadDetails.fileName})
      .pipe(
        mergeMap((signedUrl: string) =>
          this.httpClient.put(signedUrl, fileUploadDetails.file, {headers, reportProgress: true})
        ),
        mergeMap(() =>
          this.httpClient.post(`${environment.baseUrl}/fileproperties`, {
            fileName: fileUploadDetails.fileName,
            category: fileUploadDetails.category})
        )
      );

  }

}
