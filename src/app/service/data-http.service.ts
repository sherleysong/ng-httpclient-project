import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { apiList } from "./api-list";

@Injectable()
export class dataHttpService {
    constructor(public http: HttpClient) { }

    data: any = {};

    getDataService(apiName: string, param?: any, header?: any) {
        if (Object.prototype.hasOwnProperty.call(apiList, apiName)) {
            const api = apiList[apiName];
            if (api.mock) {
                return this.http.get(api.mockURL);
            } else {
                if (!header || (header && !header.headers)) {
                    const headers = new HttpHeaders().set("Authorization", this.getCookie("token"))
                    header = { headers: headers, };
                }
                const totalURL = api.url;
                const totalURLWithParams = totalURL + this.getUrl(param);
                if (api.method.toLocaleLowerCase() === "post") {
                    return this.http.post(totalURL, param, header);
                } else if (api.method.toLocaleLowerCase() === "put") {
                    return this.http.put(totalURL, param, header);
                } else if (api.method.toLocaleLowerCase() === "delete") {
                    return this.http.delete(totalURLWithParams, header);
                } else {
                    return this.http.get(totalURLWithParams, header);
                }
            }
        }
        return this.http.get("")
    }

    private getCookie(cname: string) {
        const name = cname + "=";
        const ca = document.cookie.split(";");
        for (let i = 0; i < ca.length; i++) {
            const c = ca[i].trim();
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    private getUrl(param: any) {
        let paramsUrl = ""
        for (const key in param) {
            paramsUrl = paramsUrl + "&" + key + "=" + param[key];
        }
        return paramsUrl ? "?" + paramsUrl.substring(1) : ""
    }
}
