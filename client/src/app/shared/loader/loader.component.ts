import { ChangeDetectorRef, Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { LoaderService } from "src/app/services/loader.service";

@Component({
    selector: "app-loader",
    templateUrl: "./loader.component.html",
    styleUrls: ["./loader.component.scss"],
})
export class LoaderComponent implements OnInit, OnDestroy {
    isLoad: boolean;
    subLoadStatusChange: Subscription;

    constructor(private loaderService: LoaderService, private cdr: ChangeDetectorRef) { }

    ngOnInit(): void {
        this.subLoadStatusChange = this.loaderService.getLoadStatusChange()
            .subscribe((result) => {
                this.cdr.detectChanges()
                this.isLoad = result;
            });
    }

    ngOnDestroy(): void {
        this.subLoadStatusChange.unsubscribe();
    }
}
