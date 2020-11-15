const parseCSV = require('csv-parse')

function convertCSV(data) {
    return new Promise((resolve, reject) => {
        parseCSV(data, {}, (error, result) => {
            if (result[0]) {
                resolve(result)
            } else {
                resolve(undefined)
            }
        })
    })
}

module.exports = {
    convertCSV
}