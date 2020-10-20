import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from "@angular/forms";
import { FormsService } from "src/app/services/forms/forms.service";
import { FormsValidatorsService } from "../../../services/forms/forms-validators.service";
import { TeacherService } from 'src/app/services/teacher.service';
import { Student } from 'src/app/interfaces/Student';
import { Observable } from 'rxjs';
import { timesRange, conculateRangeToTime } from "../../../services/helpers/time.range";


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
            ticketNo: [null, [
                Validators.required
            ]],
            meetingDate: [null, [
                Validators.required,
                FormsValidatorsService.limitDate(90),
                FormsValidatorsService.blockOverDate
            ]],
            times: this.formBuilder.group({
                meetingStartTime: [null, [
                    Validators.required
                ]],
                meetingEndTime: [null, [
                    Validators.required
                ]],

            }, {validator: FormsValidatorsService.getTimeRange}),
            meetingActivitis: [null, []],
            meetingComments: [null, []],
        });
    }

    onCreateMeeting() : void{
        const {
            ticketNo,
            meetingDate,
            meetingActivitis,
            meetingComments,
            times: {
                meetingStartTime,
                meetingEndTime,
            }
        } = this.meetingForm.value
       
      const report = {
        ticketNo:ticketNo,
        meetingDate: meetingDate,
        meetingActivitis: meetingActivitis,
        meetingStartTime:meetingStartTime,
        meetingEndTime: meetingEndTime,
        totalMeetingHours:conculateRangeToTime(timesRange(meetingStartTime, meetingEndTime)),
        meetingComments:meetingComments,
      }

      console.log(report)

    }


    getFormControl(controlName: string): FormControl {
        return this.meetingForm.get(controlName) as FormControl || 
        this.meetingForm.controls.times.get(controlName) as FormControl
    }

}
