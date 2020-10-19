import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from "@angular/core";

@Component({
    selector: "app-parent-signature",
    templateUrl: "./parent-signature.component.html",
    styleUrls: ["./parent-signature.component.scss"],
})
export class ParentSignatureComponent implements OnInit {

    signatureImage: Blob
    isCanvasWrite: boolean


    constructor() { }

    ngOnInit(): void { }


    saveImage(blob: Blob) {
        // Do something with the blob.
        this.isCanvasWrite = true

        this.signatureImage = blob;


    }




}
