function formatDate() {
    let x = new Date().toISOString()
    return x.slice(0, x.indexOf('T'))
}


function daysRange(timeOne, timeTwo) {
    let seconds = (timeOne - timeTwo) / 1000
    let minutes = seconds / 60
    let hours = minutes / 60
    let days = hours / 24
    return days
}


module.exports = {
    formatDate,
    daysRange
}