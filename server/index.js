/* const express = require('express');
const db = require('./config/connection');


const PORT = process.env.PORT || 3001;
const app = express();

// Note: not necessary for the Express server to function. This just helps indicate what activity's server is running in the terminal.

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
}); */

const routes = require('./routes');
const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const cors = require('cors')
require('dotenv').config()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(routes);
app.use(cors())




app.listen(process.env.PORT || 3000, () => {
    console.log(`server is listening on port 3000`)
})