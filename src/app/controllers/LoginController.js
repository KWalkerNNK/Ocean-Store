const Account = require('../models/Account');

class LoginController {
    //GET /login
    show(req, res, next) {
        res.render('login', { login: true });
    }

    // POST /register
    register(req, res, next) {
        const account = new Account(req.body);
        account.save()
            .then(() => res.redirect('/'))
            .catch(next);
    }
}
module.exports = new LoginController();