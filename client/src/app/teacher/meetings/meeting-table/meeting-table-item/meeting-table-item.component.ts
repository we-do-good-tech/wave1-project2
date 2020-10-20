import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Report } from 'src/app/interfaces/Report';

@Component({
    selector: "app-meeting-table-item",
    templateUrl: "./meeting-table-item.component.html",
    styleUrls: ["./meeting-table-item.component.scss"],
})
export class MeetingTableItemComponent implements OnInit {

    @Output() sendSignAgain: EventEmitter<any> = new EventEmitter<any>()
    @Input() report: Report

    constructor() { }

    ngOnInit(): void { }


    onSendConfirmSignAgain(): void {
        this.sendSignAgain.emit()

    }
}
