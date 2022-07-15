const homeRouter = require('./home');
const loginRouter = require('./login');
const productRouter = require('./product');
function route(app) {
    app.use('/login', loginRouter);
    app.use('/product', productRouter);
    app.use('/', homeRouter);
}
module.exports = route;