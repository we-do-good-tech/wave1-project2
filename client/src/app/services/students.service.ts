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


    findStudent(findBy: any, propery: string): Student {
        if (this.students) {
            return this.students.find((s) => {
                return s[propery] === findBy
            })
        }
    }
}
