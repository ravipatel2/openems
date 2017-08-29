import { Injectable, ErrorHandler } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs/Subject';
import { Cookie } from 'ng2-cookies';
import * as moment from 'moment';

import { Websocket } from './websocket';
import { Device } from '../device/device';

type NotificationType = "success" | "error" | "warning" | "info";

export interface Notification {
    type: NotificationType;
    message: string;
}

@Injectable()
// TODO export class Service implements ErrorHandler {
export class Service {
    public notificationEvent: Subject<Notification> = new Subject<Notification>();

    constructor(
        public translate: TranslateService
    ) {
        // add language
        translate.addLangs(["de", "en", "cz"]);
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('de');
    }

    /**
     * Sets the application language
     */
    public setLang(id: 'de' | 'en' | 'cz') {
        this.translate.use(id);
        moment.locale(id);
    }

    /**
     * Gets the token from the cookie
     */
    public getToken(): string {
        return Cookie.get("token");
    }

    /**
     * Sets the token in the cookie
     */
    public setToken(token: string) {
        Cookie.set("token", token);
    }

    /**
     * Removes the token from the cookie
     */
    public removeToken() {
        Cookie.delete("token");
    }

    /**
     * Shows a nofication using toastr
     */
    public notify(notification: Notification) {
        this.notificationEvent.next(notification);
    }

    /**
     * Handles an application error
     */
    // public handleError(error: any) {
    //     console.error(error);
    //     let notification: Notification = {
    //         type: "error",
    //         message: error
    //     };
    //     this.notify(notification);
    // }

}