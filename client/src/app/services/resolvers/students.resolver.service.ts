import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Student } from 'src/app/interfaces/Student';
import { TeacherService } from '../teacher.service';

@Injectable({
    providedIn: 'root'
})
export class StudentsResolverService implements Resolve<Student[]> {

    constructor(private teacherService: TeacherService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Student[]> {
        return this.teacherService.getStudents()
    }
}
