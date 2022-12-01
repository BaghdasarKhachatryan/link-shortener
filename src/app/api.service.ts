import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ShortenerResponse } from "./models";

@Injectable({
    providedIn:'root'
})
export class ApiService {

    constructor(private http:HttpClient){}

    private api_url = 'https://api.shrtco.de/v2/shorten';

    makeRequest(url:string):Observable<ShortenerResponse>{
        return this.http.get<ShortenerResponse>(this.api_url,{
            params:{
                url
            }
        })
    }
}