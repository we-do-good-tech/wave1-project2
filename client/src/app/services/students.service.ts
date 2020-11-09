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

    constructor(private http: HttpClient) {

    }


    getStudents(): Observable<Student[]> {
        if (this.students) {
            console.log('NO HTTP CALL STUDENTS')
            return of(this.students);
        }
        return this.http.get<Student[]>("api/teacher/students", { withCredentials: true })
            .pipe(
                tap((result) => {
                    this.students = result;
                })
            );
    }

}
