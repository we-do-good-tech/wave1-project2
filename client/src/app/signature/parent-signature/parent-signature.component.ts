import { AfterContentChecked, AfterViewChecked, AfterViewInit, Component, ElementRef, ViewChild, ViewChildren, } from "@angular/core";
import { Report } from 'src/app/interfaces/Report';


@Component({
    selector: "app-parent-signature",
    templateUrl: "./parent-signature.component.html",
    styleUrls: ["./parent-signature.component.scss"],
})
export class ParentSignatureComponent implements AfterViewChecked {

    signatureImage: Blob
    isCanvasWrite: boolean
    confirmReport: boolean
    report: Report

    @ViewChild('my') my: ElementRef



    constructor() {
        this.report = {
            studentName: 'aa',
            reportDate: '10/23/2020',
            reportStartTime: '08:30',
            reportEndTime: '10:30',
            reportRangeTimne: '02:00',
            reportActivitis: 'YUFUUYUFU YU YUF YUFUF  YFYUF FYUF  YUF YUF UYUFU YU YUF YUFUF  YFYUF  YUF YUF UYUFU YU YUF YUFUF  YFYUF  YUF YUF UYUFU YU YUF YUFUF  YFYUF  YUF YUF UYUFU YU YUF YUFUF  YFYUF  YUF YUF UYUFU YU YUF YUFUF  YFYUF  YUF YUF U',
            reportComments: 'dfsdfsd YUFU YU YUF YUFUF  ',
            ticketNo: 13,
            lastDateResendSignToParent: new Date().toDateString()
        }
    }


    saveImage(blob: Blob) {
        if (this.isCanvasWrite && this.confirmReport) {
            this.signatureImage = blob;
            console.log(this.signatureImage)
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

    ngAfterViewChecked(): void {
        console.log(this.my.nativeElement)
    }

}
