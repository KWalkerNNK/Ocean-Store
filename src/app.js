const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');

const route = require('./routes/index');
const db = require('./config/database/connect');

const app = express();
const port = process.env.port || 1410;

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

//Handlebars config
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})