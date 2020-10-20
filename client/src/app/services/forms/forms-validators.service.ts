import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn, FormGroup } from '@angular/forms';
import { timesRange, daysRange } from "../helpers/time.range";


@Injectable({
    providedIn: 'root'
})
export class FormsValidatorsService {

    static limitDate(limit: number): ValidatorFn {
        return function (control: AbstractControl): ValidationErrors {
            let value = control.value
            let now = new Date().getTime()
            let getValueTime = new Date(value).getTime()

            if (daysRange(now, getValueTime) > limit) {
                return {
                    limitDate: true
                }
            }

            return null
        }
    }

    static blockOverDate(control: AbstractControl): ValidationErrors {
        let value = control.value
        let now = new Date().getTime()
        let getValueTime = new Date(value).getTime()

        if (now < getValueTime) {
            return {
                blockOverDate: true
            }
        }

        return null
    }


    static getTimeRange(times:FormGroup): ValidationErrors {
        let start = times.get('meetingStartTime').value 
        let end = times.get('meetingEndTime').value

        if(start && end) {
            if (timesRange(start, end) < 0) {
                return {
                    getTimeRange: true
                }
            }
        }
     
        return null
    }


}
