import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Report } from '../interfaces/Report';
import { Student } from '../interfaces/Student';

@Injectable({
    providedIn: 'root'
})
export class TeacherService {

    private students: Student[]
    private reports: Report[]

    constructor(private http: HttpClient) { }


    createReport(report: Report): Observable<{ message: string }> {
        return this.http.post<{ message: string }>('api/teacher/create-report', report)
    }


    getReportsNotConfirm(): Observable<Report[]> {
        if (this.reports) {
            return of(this.reports)
        }
        return this.http.get<Report[]>('api/teacher/reports-unconfirm')
            .pipe(
                tap((result) => {
                    console.log(result)
                    this.reports = result
                })
            )
    }


    getStudents(): Observable<Student[]> {
        if (this.students) {
            return of(this.students)
        }
        return this.http.get<Student[]>('api/teacher/students')
            .pipe(
                tap((result) => {
                    console.log(result)
                    this.students = result
                })
            )

    }



}
