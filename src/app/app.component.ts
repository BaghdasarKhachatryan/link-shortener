import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'current-directory';
  shortenedLinks:Array<string> = []
  url = new FormControl()
  constructor(private api:ApiService){

  }

  sendRequest(){
    this.api.makeRequest(this.url.value).subscribe((data:any)=>{
      this.shortenedLinks.push(data.result.short_link)
    })
  }
}
