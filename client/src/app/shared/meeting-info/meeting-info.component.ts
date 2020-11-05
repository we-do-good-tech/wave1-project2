import { Component, Input } from '@angular/core';
import { Report } from 'src/app/interfaces/Report';


@Component({
    selector: 'app-meeting-info',
    templateUrl: './meeting-info.component.html',
    styleUrls: ['./meeting-info.component.scss']
})
export class MeetingInfoComponent {

    @Input() report: Report
}
