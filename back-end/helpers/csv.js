const parseCSV = require('csv-parse')


function convertCSV(data) {
    return new Promise((resolve, reject) => {
        parseCSV(data, {}, (error, data) => {
            if (data[1]) {
                resolve(data.slice(1, data.length))
            } else {
                resolve(undefined)
            }
        })
    })
}

module.exports = {
    convertCSV
}