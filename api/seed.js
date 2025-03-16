const sequelize = require('./db/index.js');
const { User, Place, UserPlace } = require('./db/models.js');

const places = ['Chipotle', 'Raising Canes', 'Culvers'];
const users = [{username: 'garrett', password: 'garrettpw', email: 'garrett@garrett.com'}, {username: 'peter', password: 'peterpw', email: 'peter@peter.com'}];
const ids = [1, 2, 3]
const seed = async() => {
  await sequelize.sync({force: true})
  await Promise.all(users.map(userObj => {
    const finalUser = User.build(userObj);
    return finalUser.save();
  }))
  await Promise.all(places.map(place => {
    let placeObj = {name: place, place_id: `1234${place}5678`, rating: 4.5, url: `${place}.com`, image_url: `${place}.com`, address: '1234 Place Pl', price: 'cheap', categories: ['chain restaurant', 'fast food']};
    return Place.create(placeObj);
  }))
  await Promise.all(ids.map(id => {
    let obj = {user_id: 1, place_id: id}
    return UserPlace.create(obj);
  }))

  console.log('database seeded successfully');
  sequelize.close();
}

seed()
.catch(err => {
  console.log(`database unable to populate, ${err}`)
  sequelize.close()
})