import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-parent-signature",
  templateUrl: "./parent-signature.component.html",
  styleUrls: ["./parent-signature.component.scss"],
})
export class ParentSignatureComponent implements OnInit {
  signatureImage;
  constructor() {}

  ngOnInit(): void {}

  onSendSignature(): void {
    console.log(this.signatureImage);
  }
  // onSendSignature(): void {
  //     console.log(this.signatureImage);
  // }

  saveImage(blob) {
    // Do something with the blob.
    console.log("clil");
    this.signatureImage = blob;

    console.log(blob);
  }
  test(sp) {
    console.log("test");

    console.log(sp);
    sp.clearButtonClass = "colors";
    return sp;
  }
}
