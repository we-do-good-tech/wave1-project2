import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { HttpErrorMessagesService } from "src/app/services/http-error-messages.service";

@Component({
  selector: "app-http-error-messages",
  templateUrl: "./http-error-messages.component.html",
  styleUrls: ["./http-error-messages.component.scss"],
})
export class HttpErrorMessagesComponent implements OnInit {
  message: string;

  constructor(private httpErrorMessages: HttpErrorMessagesService) {}

  ngOnInit(): void {
    this.httpErrorMessages.getErrorMessageChnage().subscribe((message) => {
      console.log(message);
      this.message = message;
    });
  }

  // נעשה פשוט את כל השגיאות מהשרת ככהץץ או שתברור הודעותץץהם לא ביקושו תכלס את הההודעה שלנו שבאה מלמעה
  // הם ביקשו את הנסה שנית רק
  // אני מתכוון ההודעה נגיד שיוזר לא נמצא הם לא ביקשו הודעה האדומה שעישנו מבין כן אחיץץ נו סבבה אז נעשה את כל ההודעות שגיאה מהשרת עם הSHKE
  // בגלל שהן לא מיבנות כלום הן לא לקרחו בחשבון בכלל הודעות נוספות מבין הן חשבו רק על ההודעה נסה שנית כי זה ברורץץ אז נעשה את כל ההודעה ככה מהשרת
  // או שנעשה בוררות לפי הודעה
}
