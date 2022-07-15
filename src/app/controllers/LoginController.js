class LoginController {
    //GET /login
    show(req, res, next) {
        res.render('login', {login: true});
    }

    // POST /register
    register(req, res) {
        res.send(req.body)
    }
}
module.exports = new LoginController();