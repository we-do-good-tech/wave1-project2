module.exports = {
    port: 3000,
    GOOGLE_SHEETS: {
        spreadsheetId: process.env.SPREADSHEETS_ID,
        scope: process.env.SEETS_SCOPE,
        sheetsIds: {
            coaches: '1647665051',
            childrens: '622666265',
            reports: '1036824419'
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
            expiresIn: 60 * 30

        }
    }
};
