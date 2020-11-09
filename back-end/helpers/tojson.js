function convertSheetsDataToObjectsArray(data, sheetName) {
    switch (sheetName) {
        case 'TEACHERS':
            return data.map(([id, fullName, email]) => {
                return {
                    id: Number(id),
                    firstName: fullName.split(' ').slice(0, 1)[0],
                    email: email,
                };
            });
        case 'CHILDRENS':
            return data.map(([id, studentName, parentEmail, ticketNo]) => {
                return {
                    id: id,
                    studentName: studentName,
                    parentEmail: parentEmail,
                    ticketNo: ticketNo,
                };
            });
        case 'REPORTS':
            return data.map(([reportDate, reportStartTime, reportEndTime, reportRangeTimne, reportActivitis, reportComments, ticketNo, lastDateResendSignToParent, index]) => {
                return {
                    reportDate: reportDate,
                    reportStartTime: reportStartTime,
                    reportEndTime: reportEndTime,
                    reportRangeTimne: reportRangeTimne,
                    reportActivitis: reportActivitis,
                    reportComments: reportComments,
                    ticketNo: ticketNo,
                    lastDateResendSignToParent: lastDateResendSignToParent,
                    index: Number(index)
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