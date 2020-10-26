import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Student } from '../interfaces/Student';

@Injectable({
    providedIn: 'root'
})
export class StudentsService {

    private students: Student[]
    private student: Student

    constructor(private http: HttpClient) { }


    getStudents(): Observable<Student[]> {
        if (this.students) {
            return of(this.students);
        }
        return this.http.get<Student[]>("api/teacher/students")
            .pipe(
                tap((result) => {
                    // console.log(result);
                    this.students = result;
                })
            );
    }


    setStudent(student: Student): void {
        this.student = { ...student }
    }


    getStudent(): Student {
        if (this.student) return this.student
        return undefined
    }
}
