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

// defines a route handler for a GET request to the '/get-user-places' endpoint
router.get('/get-user-places', cors(corsOptions), async (req, res) => {
  try {
    res.send('You successfully completed a GET request to the /get-user-places endpoint');
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Failed to retrieve data from the GET request', error: error.message });
  }
})

// defines a route handler for a POST request to the '/create-new-user' endpoint
router.post('/create-new-user', cors(corsOptions), async (req, res) => {
  try {
    res.json('You successfully completed a POST request to the /create-new-user endpoint');
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Failed to retrieve data from the POST request', error: error.message });
  }
})
// defines a route handler for a POST request to the '/search-places' endpoint
router.post('/search-places', cors(corsOptions), async (req, res) => {
  try {
    res.json('You successfully completed a POST request to the /search-places endpoint');
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Failed to retrieve data from the POST request', error: error.message });
  }
})

// defines a route handler for an PUT request to the '/add-restaurant' endpoint
router.put('/add-restaurant', cors(corsOptions), async (req, res) => {
  try {
    res.json('You successfully completed a PUT request to the /add-restaurant endpoint');
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Failed to retrieve data from the PUT request', error: error.message });
  }
})

// defines a route handler for an PUT request to the '/remove-restaurant' endpoint
router.put('/remove-restaurant', cors(corsOptions), async (req, res) => {
  try {
    res.json('You successfully completed a PUT request to the /remove-restaurant endpoint');
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Failed to retrieve data from the PUT request', error: error.message });
  }
})

app.on('close', () => {
  db.close();
})

// starts the server, makes the server listen for incoming requests on the specified port
app.listen(port, () => {
  console.log(`CORS-enabled web server listening on port ${port}`)
})