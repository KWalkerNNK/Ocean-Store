const express = require('express');
const route = require('./routes/index');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();
const port = process.env.PORT || 1410;

//Controller routes
route(app);

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