import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from "@angular/forms";
import { FormsService } from "src/app/services/forms/forms.service";
import { TeacherService } from 'src/app/services/teacher.service';
import { Student } from 'src/app/interfaces/Student';
import { Observable } from 'rxjs';


@Component({
    selector: "app-create-meeting",
    templateUrl: "./create-meeting.component.html",
    styleUrls: ["./create-meeting.component.scss"],
})
export class CreateMeetingComponent implements OnInit {

    students: Observable<Student[]>
    meetingForm: FormGroup;


    constructor(
        private formBuilder: FormBuilder,
        public formsService: FormsService,
        private router: Router,
        private teacherService: TeacherService
    ) { }

    ngOnInit(): void {
        this.students = this.teacherService.getStudents()

        this.meetingForm = this.formBuilder.group({
            ticketNo: [null, [Validators.required]],
            meetingDate: [null, [Validators.required]],
            meetingStartTime: [null, [Validators.required]],
            meetingEndTime: [null, [Validators.required]],
            meetingActivitis: [null, []],
            meetingComments: [null, []],
        });
    }

    onCreateMeeting() {
        const {
            ticketNo,
            meetingDate,
            meetingStartTime,
            meetingEndTime,
            meetingActivitis,
            meetingComments
        } = this.meetingForm.value


        // const now = Date.now()
        // if (now > new Date(meetingDate).getTime()) {
        //     console.log('DATE IS PASS OVER')
        // }


    }

    getFormControl(controlName: string): FormControl {
        return this.meetingForm.get(controlName) as FormControl;
    }

    createMeeting() {
        // this.router.navigate(["../../../main/teacher/meeting-seccess"]);
    }


    getTimeRange(meetingStartTime, meetingEndTime) {
        let start = meetingStartTime.split(':')
        let end = meetingEndTime.split(':')

        let range = new Date(0, 0, 0, end[0], end[1], 0).getTime() - new Date(0, 0, 0, start[0], start[1], 0).getTime()
        if (range < 0) return
        let minutes = range / 1000 / 60
        let hours = Math.floor(minutes / 60)
        let restMinutes = (minutes % 60)
        console.log(hours + ':' + restMinutes)
    }



}
