import { Router } from "@angular/router";
import { fas } from "@fortawesome/free-solid-svg-icons";
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
            studentName: [null, [Validators.required]],
            meetingDate: [null, [Validators.required]],
            meetingStartTime: [null, [Validators.required]],
            meetingEndTime: [null, [Validators.required]],
            meetingActivitis: [null, []],
            meetingComments: [null, []],
        });
    }

    onCreateMeeting() {
        console.log(this.meetingForm.value);
    }

    getFormControl(controlName: string): FormControl {
        return this.meetingForm.get(controlName) as FormControl;
    }

    createMeeting() {
        // this.router.navigate(["../../../main/teacher/meeting-seccess"]);
    }

}
