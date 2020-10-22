import { ActivatedRoute, Router } from "@angular/router";
import { AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators, } from "@angular/forms";
import { FormsService } from "src/app/services/forms/forms.service";
import { FormsValidatorsService } from "../../../services/forms/forms-validators.service";
import { Student } from 'src/app/interfaces/Student';
import { timesRange, conculateRangeToTime } from "../../../services/helpers/time.range";
import { Report } from 'src/app/interfaces/Report';
import { MeetingsService } from 'src/app/services/meetings.service';
import { timeList } from "../../../services/helpers/times.list";


@Component({
    selector: "app-create-meeting",
    templateUrl: "./create-meeting.component.html",
    styleUrls: ["./create-meeting.component.scss"],
})
export class CreateMeetingComponent implements OnInit, AfterContentInit, AfterViewInit {

    students: Student[]
    meetingForm: FormGroup;
    timeList: string[]

    constructor(
        private formBuilder: FormBuilder,
        public formsService: FormsService,
        private route: ActivatedRoute,
        private meetingService: MeetingsService) {
        this.students = []
        this.timeList = timeList(8, 24, 10)
    }

    // @ViewChild('dateInput') pick: ElementRef

    ngAfterViewInit() {
        // console.log(this.pick.nativeElement)
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

                ]],
                meetingEndTime: [null, [

                ]],

            }, { validator: FormsValidatorsService.PositiveTimeRange }),
            meetingActivitis: [null, []],
            meetingComments: [null, []],
        });

        this.checkDateAndAddValidateTime()
    }


    ngAfterContentInit(): void {
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

        console.log(studentName)

        // const student = this.students.find((s) => s.studentName === studentName)
        // const report: Report = {
        //     studentName: studentName,
        //     ticketNo: student.ticketNo,
        //     reportDate: meetingDate,
        //     reportActivitis: meetingActivitis,
        //     reportStartTime: meetingStartTime,
        //     reportEndTime: meetingEndTime,
        //     reportRangeTimne: conculateRangeToTime(timesRange(meetingStartTime, meetingEndTime)),
        //     reportComments: meetingComments,
        //     parentEmail: student.parentEmail,
        //     isParentSign: false,
        //     parentSignImageUrl: null
        // }

        // console.log(report)
        // this.meetingService.setReport(report)
        // this.router.navigate(['/main/teacher/meeting-new'])
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


    checkDateAndAddValidateTime() {
        this.getFormControl('meetingDate').valueChanges.subscribe((result) => {
            const meetingDate = new Date(result).toLocaleDateString()
            const dateToday = new Date().toLocaleDateString()
            const startTime = this.getFormControl('meetingStartTime')
            const endTime = this.getFormControl('meetingEndTime')
            if (meetingDate === dateToday) {
                startTime.setValidators([Validators.required, FormsValidatorsService.blockOverTime])
                endTime.setValidators([Validators.required, FormsValidatorsService.blockOverTime])
            } else {
                startTime.setValidators([Validators.required])
                endTime.setValidators([Validators.required])
            }
            startTime.updateValueAndValidity()
            endTime.updateValueAndValidity()
        })
    }

}
