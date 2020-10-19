import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from 'src/app/interfaces/Student';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
    selector: 'app-meeting-table',
    templateUrl: './meeting-table.component.html',
    styleUrls: ['./meeting-table.component.scss']
})
export class MeetingTableComponent implements OnInit {

    students: Observable<Student[]>

    meeting: number[] = [1, 2, 3, 4, 5, 6]

    constructor(private teacherService: TeacherService) { }

    ngOnInit(): void {
        this.students = this.teacherService.getStudents()
    }

}
