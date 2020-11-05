const parseCSV = require('csv-parse')

function convertCSV(data) {
    return new Promise((resolve, reject) => {
        parseCSV(data, {}, (error, result) => {
            // console.log(result.slice(1, result.length), 'CSV FUNC')
            if (result[0]) {
                // resolve(result.slice(1, result.length))
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