import { ActivatedRoute, Router } from "@angular/router";
import { AfterContentChecked, AfterViewInit, Component, OnInit } from "@angular/core";
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
import { timesRange, conculateRangeToTime } from "../../../services/helpers/time.range";
import { Report } from 'src/app/interfaces/Report';
import { MeetingsService } from 'src/app/services/meetings.service';


@Component({
    selector: "app-create-meeting",
    templateUrl: "./create-meeting.component.html",
    styleUrls: ["./create-meeting.component.scss"],
})
export class CreateMeetingComponent implements OnInit, AfterViewInit {

    students: Student[]
    meetingForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        public formsService: FormsService,
        private router: Router,
        private route: ActivatedRoute,
        private teacherService: TeacherService,
        private meetingService: MeetingsService
    ) {
        this.students = []
    }

    ngOnInit(): void {
        this.route.data.subscribe((result) => this.students = result.students)

        this.meetingForm = this.formBuilder.group({
            studentName: [null, [
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

            }, { validator: FormsValidatorsService.getTimeRange }),
            meetingActivitis: [null, []],
            meetingComments: [null, []],
        });
    }


    ngAfterViewInit(): void {
        this.setMeetingFormValues()
    }

    onCreateMeeting(): void {
        const {
            studentName,
            meetingDate,
            meetingActivitis,
            meetingComments,
            times: {
                meetingStartTime,
                meetingEndTime,
            }
        } = this.meetingForm.value

        const student = this.students.find((s) => s.studentName === studentName)
        const report: Report = {
            studentName: studentName,
            ticketNo: student.ticketNo,
            reportDate: meetingDate,
            reportActivitis: meetingActivitis,
            reportStartTime: meetingStartTime,
            reportEndTime: meetingEndTime,
            reportRangeTimne: conculateRangeToTime(timesRange(meetingStartTime, meetingEndTime)),
            reportComments: meetingComments,
            parentEmail: student.parentEmail,
            isParentSign: false,
            parentSignImageUrl: null
        }

        // console.log(report)
        this.meetingService.setReport(report)
        this.router.navigate(['/main/teacher/meeting-new'])
    }


    getFormControl(controlName: string): FormControl {
        return this.meetingForm.get(controlName) as FormControl || this.meetingForm.controls.times.get(controlName) as FormControl
    }


    setMeetingFormValues() {
        const report = this.meetingService.getReportCreated()
        if (report) {
            this.meetingForm.patchValue({
                studentName: report.studentName,
                meetingDate: report.reportDate,
                meetingActivitis: report.reportActivitis,
                meetingComments: report.reportComments,
                times: {
                    meetingStartTime: report.reportStartTime,
                    meetingEndTime: report.reportEndTime
                }
            })
        }
    }

}
