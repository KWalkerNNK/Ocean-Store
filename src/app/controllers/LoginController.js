class LoginController {
    //GET /Login
    show(req, res, next) {
        res.render('login', {login: true});
    }
}
module.exports = new LoginController();