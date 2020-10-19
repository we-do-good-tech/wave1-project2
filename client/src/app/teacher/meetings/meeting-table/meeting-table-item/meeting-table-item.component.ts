import { Component, ElementRef, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
    selector: "app-meeting-table-item",
    templateUrl: "./meeting-table-item.component.html",
    styleUrls: ["./meeting-table-item.component.scss"],
})
export class MeetingTableItemComponent implements OnInit {

    @Output() sendSignAgain: EventEmitter<any> = new EventEmitter<any>()

    constructor() { }

    ngOnInit(): void { }


    onSendConfirmSignAgain(): void {
        this.sendSignAgain.emit()

    }
}
