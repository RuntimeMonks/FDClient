import { Injectable } from "@angular/core";
import { UserService } from "./user.service";
import { Router } from "@angular/router";
import { HttpRequest, HttpHandler } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class BasicauthhttpinterceptorService {
  constructor(private uservice: UserService, private route: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    if (!this.uservice.isUserLoggedIn()) {
      this.route.navigate(["/home"]);
    }
    if (
      sessionStorage.getItem("email") &&
      sessionStorage.getItem("basicauth")
    ) {
      req = req.clone({
        setHeaders: {
          Authorization: sessionStorage.getItem("basicauth")
        }
      });
    }
    console.log("current request", req);
    return next.handle(req);
  }
}
