const { check } = require('express-validator')


module.exports = {
    email: function (property) {
        return check(property, 'INVALID VALUES').exists().isEmail()
    },
    confirm_code: check('code', 'INVALID VALUES').exists().isNumeric().isLength({ min: 4, max: 4 })

}