import { Component, OnInit, } from "@angular/core";
import { Report } from 'src/app/interfaces/Report';
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

    constructor(private signService: SignService, private reportsService: ReportsService) { }


    ngOnInit(): void {
        this.report = this.reportsService.getReport()
        console.log(this.report)

    }

    saveImage(blob: Blob) {
        if (this.isCanvasWrite && this.confirmReport) {
            this.signatureImage = blob;
            console.log(this.signatureImage)

            this.signService.sendSign(this.signatureImage).subscribe((result) => {
                alert('SIGN IS SEND')
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
