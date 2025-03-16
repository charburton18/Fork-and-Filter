require('dotenv').config();
const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.SERVER_PORT || 8080
const router = express.Router()
const db = require('./db');
const { Op } = require('sequelize');

const controller = require('./db/controller.js');

const {User, Place, UserPlace} = require('./db/models.js');

// enables CORS on the entire server
const corsOptions = {
  origin: ['http://localhost:5173']
}
app.use(cors(corsOptions));
app.use(express.json());

// uses middleware on the '/' route
app.use('/', router);

// defines a route handler for a GET request to the '/get-user-places' endpoint
router.post('/get-user-places', cors(corsOptions), async (req, res) => {
  const { user_id } = req.body;
  try {
    const userPlaces = await UserPlace.findAll({where: { user_id }})
    const placeIds = userPlaces.map(userPlace => userPlace.place_id);
    const places = await Place.findAll({where: { id: {
      [Op.in]: placeIds
    }}})
    res.send(places);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Failed to retrieve data from the GET request', error: error.message });
  }
})

// defines a route handler for a POST request to the '/create-new-user' endpoint
router.post('/create-new-user', cors(corsOptions), async (req, res) => {
  try {
    const { username, password, email } = req.body
    const existingUser = await User.findOne({where: { username, password, email }});

    if (existingUser) {
      res.status(400).send({ message: 'User already exists' });
    }

    const newUser = await User.create(req.body);
    return res.status(201).json(newUser);

  } catch (error) {
    res.status(500).send({ message: 'Failed to retrieve data from the POST request', error: error.message });
    console.error(error);
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