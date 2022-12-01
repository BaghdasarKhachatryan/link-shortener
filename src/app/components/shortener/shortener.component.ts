import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { catchError, map, of, throwError } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { Result, ShortenerResponse } from 'src/app/models';

@Component({
  selector: 'app-shortener',
  templateUrl: './shortener.component.html',
  styleUrls: ['./shortener.component.css'],
})
export class ShortenerComponent {
  shortenedLinks: Array<string> = [];
  url = new FormControl();
  constructor(private api: ApiService, private toastr: ToastrService) {}

  sendRequest() {
    this.api
      .makeRequest(this.url.value)
      .pipe(
        map((response: ShortenerResponse) => {
          return response.result;
        }),
        catchError((err) => throwError(err))
      )
      .subscribe(
        (result: Result) => {
          this.shortenedLinks.push(result.short_link);
          this.url.reset();
        },
        (err) => {
          this.toastr.error(err.error.error);
          this.url.reset();
        }
      );
  }
}
