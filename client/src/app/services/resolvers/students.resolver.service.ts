import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Student } from 'src/app/interfaces/Student';
import { StudentsService } from '../students.service';


@Injectable({
    providedIn: 'root'
})
export class StudentsResolverService implements Resolve<Student[]> {

    constructor(private studentsService: StudentsService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Student[]> {
        return this.studentsService.getStudents()
    }
}
