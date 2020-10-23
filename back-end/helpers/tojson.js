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
            return data.map(([id, studentName, parentEmail, ticketNo, teacherId], index) => {
                return {
                    id: id,
                    studentName: studentName,
                    parentEmail: parentEmail,
                    ticketNo: ticketNo,
                };
            });
        case 'REPORTS':
            return data.map(([reportDate, reportStartTime, reportEndTime, reportRangeTimne, reportActivitis, reportComments, ticketNo]) => {
                return {
                    reportDate: reportDate,
                    reportStartTime: reportStartTime,
                    reportEndTime: reportEndTime,
                    reportRangeTimne: reportRangeTimne,
                    reportActivitis: reportActivitis,
                    reportComments: reportComments,
                    ticketNo: ticketNo
                }
            })
        default:
            return null
    }
}


module.exports = {
    convertSheetsDataToObjectsArray
}