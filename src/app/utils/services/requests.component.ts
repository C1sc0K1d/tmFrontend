import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders }from '@angular/common/http';
import { MessageService } from "src/message.service";
import { catchError, Observable, of, tap } from "rxjs";
import { TransferenceData } from "../interfaces/transference-data";
import { Transfer } from "../requests/transfer-request";

@Injectable({
  providedIn: 'root'
})
export class Requests {
  url = environment.baseUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, private messageService: MessageService) {}

  getAll() : Observable<TransferenceData[]> {
    return this.http.get<TransferenceData[]>(this.url).pipe(tap(), catchError(this.handleError<TransferenceData[]>('getAll', [])));
  }

  transfer(request: Transfer) : Observable<TransferenceData> {
    return this.http.post<TransferenceData>(this.url, request).pipe(tap(), catchError(this.handleError<TransferenceData>('addTranference')))
  }

  private handleError<T>(operation: string, result?: T): any {
    return(error: any): Observable<T> => {
      console.error(error.error.message);
      alert(error.error.message)
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string): void {
    this.messageService.add(`${message}`);
  }
}