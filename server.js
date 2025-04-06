const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes/route.js');
const connectToMongo = require('./database/db_connection');

app.use(express.json()); 

app.use(express.static(path.join(__dirname, 'public')));
app.use('/products', routes);

connectToMongo();

app.listen(3000, () => {
  console.log("listening on 3000");
});
