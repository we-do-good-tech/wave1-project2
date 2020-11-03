import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Report } from 'src/app/interfaces/Report';

@Component({
    selector: "app-meeting-table-item",
    templateUrl: "./meeting-table-item.component.html",
    styleUrls: ["./meeting-table-item.component.scss"],
})
export class MeetingTableItemComponent {

    @Output() sendSignAgain: EventEmitter<Report> = new EventEmitter<Report>()
    @Input() report: Report
    @Input() index: number
    @Input() displayItem: boolean

    onSendConfirmSignAgain(report: Report): void {
        this.sendSignAgain.emit(report)
    }
}
