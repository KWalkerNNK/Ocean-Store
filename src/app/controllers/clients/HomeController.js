class HomeController {
    //GET /Home
    index(req, res) {
        res.render('clients/home');
    }

    // GET /home/id
    show(req, res) {
        res.send('id moiws');
    }
}
module.exports = new HomeController();