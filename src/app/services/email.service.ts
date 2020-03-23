import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

export interface IEmailResponse {
  id: number;
  subject: string;
  sender: string;
  body: string;
  tags: string[];
  date: Date;
}
export interface IEmailsJsonResponse {
  messages: IEmailResponse[];
}
export interface IEmail {
  id: number;
  subject: string;
  sender: string;
  body: string;
  tags: string[];
  date: Date;
  isRead: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  public getEmailsJSON(): Observable<IEmail[]> {
    return this.http.get<IEmailsJsonResponse>("./assets/emails.json").pipe(
      map(res =>  {
        if (res && res.messages) {
          let emails = [];
          res.messages.map(m => emails.push({
            ...m, 
            isRead: false,
            tags: m.tags.concat('inbox')}));
          return emails;
        }
        return null; 
    }));
}
  constructor(private http: HttpClient) { }
}
