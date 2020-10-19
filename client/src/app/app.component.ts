import { Component, Renderer2 } from "@angular/core";
import { AuthService } from "./services/auth.service";
import { environment } from "../environments/environment.prod";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
})
export class AppComponent {
    constructor(private authService: AuthService) {
        // this.authService.getAuthData()
        // console.log(environment)
    }
}
