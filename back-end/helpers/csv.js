const parseCSV = require('csv-parse')

function convertCSV(data) {
    return new Promise((resolve, reject) => {
        parseCSV(data, {}, (error, result) => {
            console.log(result, 'CSV FUNC')
            if (result[1]) {
                resolve(result.slice(1, result.length))
            } else {
                resolve(undefined)
            }
        })
    })
}

module.exports = {
    convertCSV
}