function convertSheetsDataToObjectsArray(data, sheetName) {
    switch (sheetName) {
        case 'TEACHERS':
            return data.map(([id, fullName, email], index) => {
                return {
                    id: id,
                    firstName: fullName.split(' ').slice(0, 1)[0],
                    email: email,
                };
            });
        case 'CHILDRENS':
            return data.map(([id, studentName, parentEmail, ticketNo], index) => {
                return {
                    id: id,
                    studentName: studentName,
                    parentEmail: parentEmail,
                    ticketNo: ticketNo,
                };
            });
        case 'REPORTS':
            return data.map(([reportDate, reportStartTime, reportEndTime, reportRangeTimne, reportActivitis, reportComments, ticketNo, lastResendDateToParent, index]) => {
                return {
                    reportDate: reportDate,
                    reportStartTime: reportStartTime,
                    reportEndTime: reportEndTime,
                    reportRangeTimne: reportRangeTimne,
                    reportActivitis: reportActivitis,
                    reportComments: reportComments,
                    ticketNo: ticketNo,
                    lastResendDateToParent: lastResendDateToParent,
                    index: index
                }
            })
        case 'REPORTS_STATS':
            return data.map(([totalHours, repostsCount, limitHours]) => {
                return {
                    totalHours: totalHours,
                    repostsCount: repostsCount,
                    limitHours: limitHours
                }
            })
        default:
            return null
    }
}


module.exports = {
    convertSheetsDataToObjectsArray
}