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
        default:
            return null
    }
}


module.exports = {
    convertSheetsDataToObjectsArray
}