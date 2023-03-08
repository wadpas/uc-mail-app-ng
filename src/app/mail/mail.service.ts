import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Mail } from "./mail.interface";

@Injectable()
export class MailService {
    constructor(private http: HttpClient) { }

    getFolder(folder: string) {
        return this.http.get<Mail[]>(`http://localhost:3000/messages?folder=${folder}`)
    }

    getMessage(id: number) {
        return this.http.get<Mail>(`http://localhost:3000/messages?id=${id}`)
    }

}