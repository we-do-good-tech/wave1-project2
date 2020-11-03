import { Component, OnInit, } from "@angular/core";
import { Router } from '@angular/router';
import { Report } from 'src/app/interfaces/Report';
import { LoaderService } from 'src/app/services/loader.service';
import { ReportsService } from 'src/app/services/reports.service';
import { SignService } from 'src/app/services/sign.service';


@Component({
    selector: "app-parent-signature",
    templateUrl: "./parent-signature.component.html",
    styleUrls: ["./parent-signature.component.scss"],
})
export class ParentSignatureComponent implements OnInit {

    signatureImage: Blob
    isCanvasWrite: boolean
    confirmReport: boolean
    report: Report

    constructor(
        private signService: SignService,
        private reportsService: ReportsService,
        private router: Router,
        private loaderService: LoaderService
    ) { }


    ngOnInit(): void {
        this.report = this.reportsService.getReport()
        console.log(this.report)

    }

    saveImage(blob: Blob) {
        if (this.isCanvasWrite && this.confirmReport) {
            this.signatureImage = blob;
            // console.log(this.signatureImage)
            this.loaderService.setStatus(true)
            this.signService.sendSign(this.signatureImage).subscribe((result) => {
                // alert('SIGN IS SEND')
                this.router.navigate(['confirm-report/signature-success'])
            })
        }
    }


    clearImage() {
        this.isCanvasWrite = false
    }


    onSignChange(points: any[]) {
        if (points.length > 0) {
            this.isCanvasWrite = true
        }
    }



}
