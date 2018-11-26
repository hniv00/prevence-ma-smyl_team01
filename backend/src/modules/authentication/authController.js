import db from '../database/model/';
const Op = db.Sequelize.Op;
var bcrypt = require('bcrypt');

export const authController = async (req, res) => {
    var uname = req.params.user;
    var pass = req.params.secret;
    const adminUser = await db.AdminUser.findOne({ where: { Username: uname } })
    
    if (!adminUser) {
        // wrong user
        res.redirect('/admin-login')
    } else if (!validPass(pass, adminUser.Password)) {
        // wrong pass
        res.redirect('/admin-login')
    } else {
        res.redirect('/admin-lp')
    }
}

function validPass(pass, hash) {
    return bcrypt.compareSync(pass, hash);
}

