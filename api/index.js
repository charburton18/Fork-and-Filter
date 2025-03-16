require('dotenv').config();
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.SERVER_PORT || 8080
const router = express.Router()
const db = require('./db');

// enables CORS on the entire server
const corsOptions = {
  origin: ['http://localhost:5173']
}
app.use(cors(corsOptions));

// uses middleware on the '/' route
app.use('/', router);

// defines a route handler for a GET request to the '/' endpoint
router.get('/', cors(corsOptions), async (req, res) => {
  try {
    res.send('hello');
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Failed to retrieve data', error: error.message });
  }
})

// defines a route handler for a POST request to the '/' endpoint
router.post('/', cors(corsOptions), async (req, res) => {
  try {
    res.json('hello');
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Failed to retrieve data from the POST request', error: error.message });
  }
})

app.on('close', () => {
  db.close();
})

// starts the server, makes the server listen for incoming requests on the specified port
app.listen(port, () => {
  console.log(`CORS-enabled web server listening on port ${port}`)
})