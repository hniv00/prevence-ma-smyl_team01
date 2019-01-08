import db from '../database/model/';
var bcrypt = require('bcrypt');

export const authController = async (req, res) => {
  var uname = req.params.user;
  var pass = req.params.secret;
  const adminUser = await db.AdminUser.findOne({ where: { Username: uname } });

  if (!adminUser) {
    // wrong user
    res.sendStatus(403);
  } else if (!validPass(pass, adminUser.Password)) {
    // wrong pass
    res.sendStatus(403);
  } else {
    res.sendStatus(200);
  }
};

function validPass(pass, hash) {
  return bcrypt.compareSync(pass, hash);
}
