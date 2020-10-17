import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-parent-signature",
  templateUrl: "./parent-signature.component.html",
  styleUrls: ["./parent-signature.component.scss"],
})
export class ParentSignatureComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  name = "angular";
}
