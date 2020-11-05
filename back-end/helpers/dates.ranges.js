function formatDate() {
    let x = new Date().toISOString()
    return x.slice(0, x.indexOf('T'))
}


function timesRange(timeOne, timeTwo) {
    let start = timeOne.split(':')
    let end = timeTwo.split(':')
    let range = new Date(0, 0, 0, Number(end[0]), Number(end[1]), 0).getTime() - new Date(0, 0, 0, Number(start[0]), Number(start[1]), 0).getTime()
    return range
}


function daysRange(timeOne, timeTwo) {
    let seconds = (timeOne - timeTwo) / 1000
    let minutes = seconds / 60
    let hours = minutes / 60
    let days = hours / 24
    return days
}

function conculateRangeToTime(range) {
    let minutes = range / 1000 / 60
    let hours = Math.floor(minutes / 60)
    let restMinutes = (minutes % 60)
    let finalHours = hours <= 9 ? `0${hours}` : hours
    let finalMinutes = restMinutes <= 9 ? `0${restMinutes}` : restMinutes
    return `${finalHours}:${finalMinutes}`
}


module.exports = {
    formatDate,
    daysRange,
    timesRange,
    conculateRangeToTime
}