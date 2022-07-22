const express = require('express');
const { engine } = require('express-handlebars');
const session = require('express-session');

//Session Storage
const MongoStore = require('connect-mongo');

const path = require('path');

const route = require('./routes/index');
const db = require('./config/database/connect');

const app = express();
const port = process.env.port || 1410;
const url = 'mongodb+srv://admin_ocean:6MnepTBXzCRhcS20@cluster0.sk3ubbg.mongodb.net/?retryWrites=true&w=majority'

//Middleware for post method, add this before adding routes
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Handlebars config
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//Session
app.use(session({
  secret: 'squirrel', //Encryption
  store: MongoStore.create({
    mongoUrl: url,
    ttl: 24 * 60 * 60, // = 1 days. Default
  }),
  resave: false, //Don't save session if unmodified
  saveUninitialized: false, // Don't create session until something stored
  cookie: {
    secure: false,
    maxAge: 1000 * 60 * 60 * 24,
  }
}));

//Controller routes
route(app);

//Connect Database
db.connect();

//Lookup view
app.use(express.static(path.join(__dirname, 'resources/views/clients')));


//Template engine
app.engine(
  'hbs',
  engine({
    extname: '.hbs',
    helpers: {
      sum: (a, b) => a + b,
    },
  }),
);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})