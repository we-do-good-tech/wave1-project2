import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';

@Component({
    selector: 'app-single-meeting',
    templateUrl: './single-meeting.component.html',
    styleUrls: ['./single-meeting.component.scss']
})
export class SingleMeetingComponent implements OnInit {
    mode: string

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.url.subscribe((result) => {
            this.checkUrl(result)
        })
    }


    checkUrl(paths: UrlSegment[]) { }





}
