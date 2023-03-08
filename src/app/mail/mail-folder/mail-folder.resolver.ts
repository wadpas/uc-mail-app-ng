import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Mail } from "../mail.interface";
import { MailService } from "../mail.service";

@Injectable()
export class MailFolderResolver implements Resolve<Mail[]> {
    constructor(private mailService: MailService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        Mail[] | Observable<Mail[]> | Promise<Mail[]> {
        return this.mailService.getFolder(route.params['name'])
    }

}