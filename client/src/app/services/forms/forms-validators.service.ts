import { Injectable } from "@angular/core";
import {
    AbstractControl,
    ValidationErrors,
    ValidatorFn,
    FormGroup,
} from "@angular/forms";
import { timesRange, daysRange } from "../helpers/time.range";

@Injectable({
    providedIn: "root",
})
export class FormsValidatorsService {

    static limitDate(limit: number): ValidatorFn {
        return function (control: AbstractControl): ValidationErrors {
            let value = control.value;
            let now = new Date().getTime();
            let getValueTime = new Date(value).getTime();

            if (daysRange(now, getValueTime) > limit) {
                return {
                    limitDate: true,
                };
            }

            return null;
        };
    }

    static blockOverDate(control: AbstractControl): ValidationErrors {
        let value = control.value;
        let now = new Date().getTime();
        let getValueTime = new Date(value).getTime();

        if (now < getValueTime) {
            return {
                blockOverDate: true,
            };
        }
    }


    static blockOverTime(control: AbstractControl): ValidationErrors {
        let value = control.value
        let now = new Date()
        let currentDate = now.toLocaleDateString().split('/').length === 1 ? now.toLocaleDateString().split('.') : now.toLocaleDateString().split('/')

        if (value) {
            let time = value.split(':')
            let timeValue = new Date(Number(currentDate[2]), Number(currentDate[0]) - 1, Number(currentDate[1]), Number(time[0]), Number(time[1]), 0).getTime()
            if (now.getTime() < timeValue) {
                return {
                    blockOverTime: true
                }
            }
        }

        return null
    }



    static PositiveTimeRange(times: FormGroup): ValidationErrors {
        let start = times.get("meetingStartTime").value;
        let end = times.get("meetingEndTime").value;

        if (start && end) {
            if (timesRange(start, end) <= 0) {
                return {
                    PositiveTimeRange: true,
                };
            }
        }

        return null;
    }
}
