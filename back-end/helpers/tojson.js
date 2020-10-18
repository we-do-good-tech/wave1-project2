function convertSheetsDataToObjectsArray(data, sheetName) {
    switch (sheetName) {
        case 'TEACHERS':
            return data.map(([id, firstName, lastName, phone, email], index) => {
                return {
                    id: id,
                    firstName: firstName,
                    lastName: lastName,
                    phone: phone,
                    email: email,
                };
            });
        case 'CHILDRENS':
            return data.map(([id, firstName, parentEmail, teacherId, ticketNo], index) => {
                return {
                    id: id,
                    firstName: firstName,
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