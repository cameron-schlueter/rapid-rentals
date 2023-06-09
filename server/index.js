/* const express = require('express');



const PORT = process.env.PORT || 3001;
const app = express();

// Note: not necessary for the Express server to function. This just helps indicate what activity's server is running in the terminal.

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



 */
const db = require('./config/connection');
const routes = require('./routes');
const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const cors = require('cors')
require('dotenv').config()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, "public")))
app.use(routes);
app.use(cors())

db.once('open', () => {
  app.listen(process.env.PORT || 3000, () => {
  console.log(`server is listening on port 3000`)
  })
});