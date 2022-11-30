import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class ApiService {

    constructor(private http:HttpClient){}

    private api_url = 'https://api.shrtco.de/v2/shorten';

    makeRequest(url:string){
        return this.http.get(this.api_url,{
            params:{
                url
            }
        })
    }
}