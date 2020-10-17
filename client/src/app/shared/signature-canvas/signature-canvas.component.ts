import { Component, OnInit } from "@angular/core";

@Component({
  selector: "signature-canvas",
  templateUrl: "./signature-canvas.component.html",
  styleUrls: ["./signature-canvas.component.scss"],
})
export class SignatureCanvasComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  signatureImage;

  saveImage(blob: Blob) {
    // Do something with the blob.
    this.signatureImage = blob;
    console.log(blob);
  }
}
