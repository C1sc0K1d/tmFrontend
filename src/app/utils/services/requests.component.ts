import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders }from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Requests {
  url = environment.baseUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json' })
  };
}