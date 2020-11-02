export function timesRange(timeOne: string, timeTwo: string): number {
    let start = timeOne.split(':')
    let end = timeTwo.split(':')
    let range = new Date(0, 0, 0, Number(end[0]), Number(end[1]), 0).getTime() - new Date(0, 0, 0, Number(start[0]), Number(start[1]), 0).getTime()
    return range
}


export function conculateRangeToTime(range: number): string {
    let minutes = range / 1000 / 60
    let hours = Math.floor(minutes / 60)
    let restMinutes = (minutes % 60)
    let finalHours = hours <= 9 ? `0${hours}` : hours
    let finalMinutes = restMinutes <= 9 ? `0${restMinutes}` : restMinutes
    return `${finalHours}:${finalMinutes}`
}


export function daysRange(timeOne: number, timeTwo: number): number {
    let seconds = (timeOne - timeTwo) / 1000
    let minutes = seconds / 60
    let hours = minutes / 60
    let days = hours / 24
    return days
}

export function formatDate(date: Date | string) {
    let x = new Date(date).toISOString()
    // console.log(x)
    return x.slice(0, x.indexOf('T'))
}
