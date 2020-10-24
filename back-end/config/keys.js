module.exports = {
    port: 3000,
    GOOGLE_SHEETS: {
        spreadsheetId: process.env.SPREADSHEETS_ID,
        scope: process.env.SEETS_SCOPE,
        sheetsIds: {
            teachers: process.env.SHEET_ID_TEACHERS,
            childrens: process.env.SHEET_ID_CHILDRENS,
            reports: process.env.SHEET_ID_REPORTS,
            stats: process.env.SHEET_ID_TEACHER_STATS
        },
        sheetsNames: {
            reports: process.env.SHEETS_NAME_REPORTS,
            teachers: process.env.SHEET_NAME_TEACHERS,
            childrens: process.env.SHEET_NAME_CHILDRENS,
            stats: process.env.SHETT_NAME_TEACHER_STATS
        }
    },
    EMAIL_SENDER: {
        auth: {
            user: process.env.AUTH_EMAIL_USER,
            pass: process.env.AUTH_EMAIL_PASS
        }
    },
    TOKENS: {
        ACCESS_TOKEN: {
            secretTokenKey: process.env.SECRET_ACCESS_TOKEN_KEY,
            expiresIn: 60 * 120

        }
    }
};

