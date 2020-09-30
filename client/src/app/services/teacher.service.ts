import { Injectable } from '@angular/core';
import { Meeting } from '../interfaces/Meeting';

@Injectable({
    providedIn: 'root'
})
export class TeacherService {

    constructor() { }

    createMeeting(meeting: Meeting) { }

    getSingleMeeting(meetingId: string) { }
}
