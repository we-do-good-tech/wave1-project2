import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { stringify } from 'querystring';
import { Observable, of, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Report } from '../interfaces/Meeting';
import { Student } from '../interfaces/Student';

@Injectable({
    providedIn: 'root'
})
export class TeacherService {

    private students: Student[]

    constructor(private http: HttpClient) { }

    createReport(report: Report) {

    }


    // getSingleReport(meetingId: string) { }


    getStudents(): Observable<Student[]> {
        if (this.students) {
            return of(this.students)
        }
        return this.http.get<Student[]>('api/teacher/students')
            .pipe(
                tap((result) => {
                    console.log(result)
                    this.students = result
                    return this.students
                })
            )

    }



}
