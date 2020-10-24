import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Student } from 'src/app/interfaces/Student';
import { LoaderService } from '../loader.service';
import { StudentsService } from '../students.service';


@Injectable({
    providedIn: 'root'
})
export class StudentsResolverService implements Resolve<Student[]> {

    constructor(private studentsService: StudentsService, private loaderService: LoaderService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Student[]> {
        this.loaderService.setStatus(true)
        return this.studentsService.getStudents()
    }
}
