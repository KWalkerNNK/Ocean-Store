const Account = require('../models/Account');

class LoginController {
    //GET /login: show login details
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

    //POST /login
    async login(req, res, next) {
        let sess = req.session;
        try {
            let account = await Account.findOne({ email: req.body.email, password: req.body.password }).lean()

            if (account) {
                sess.user = account;
                console.dir('Chao '+ sess.user.name);
                next();
                return res.redirect('/');
            }
            return res.redirect('/login');
        }
        catch (err) {
            next(err)
        }
    }
}

module.exports = new LoginController();