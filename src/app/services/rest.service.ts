import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

const localUrl = 'http://localhost:8080/books';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor(private http: HttpClient) {}

  getSmartphone() {
    let headers = new HttpHeaders();
    headers = headers.set(
      'Authorization',
      `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTcxMzAyNjcxOCwiaWF0IjoxNzEyNDIxOTE4fQ.iTwQ2pQjrEHyKYvwhHzkjHQUtgbrVq-xo5WcE5w7MRlNpp0r5BU-bPu-7ky0sZG92F5IaDTf3FgVd-P3p4NvHA`
    );
    headers = headers.set('Content-Type', 'application/json');
    // Set up HTTP options with headers
    const options = { headers: headers };

    return this.http.get(localUrl, options);
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError(() => 'Something bad happened; please try again later.');
  }
}
