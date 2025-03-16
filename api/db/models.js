const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./index.js')

const User = sequelize.define('User', {
  id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true
  },
  email: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
  },
  username: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
  },
  password: {
      type: DataTypes.TEXT,
      allowNull: false
  },
  date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW
  },
  date_updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW
  },
  date_archived: {
      type: DataTypes.DATE,
      allowNull: true
  }
}, {
  tableName: 'user',
  timestamps: false
});

const Place = sequelize.define('Place', {
  id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true
  },
  place_id: {
      type: DataTypes.TEXT,
      allowNull: false
  },
  name: {
      type: DataTypes.TEXT,
      allowNull: false
  },
  rating: {
      type: DataTypes.DECIMAL(2, 1),
      allowNull: false
  },
  url: {
      type: DataTypes.TEXT,
      allowNull: false
  },
  image_url: {
      type: DataTypes.TEXT,
      allowNull: false
  },
  address: {
      type: DataTypes.TEXT,
      allowNull: false
  },
  price: {
      type: DataTypes.TEXT,
      allowNull: false
  },
  categories: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
  },
  date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW
  },
  date_updated: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW
  },
  date_archived: {
      type: DataTypes.DATE,
      allowNull: true
  }
}, {
  tableName: 'place',
  timestamps: false
});

const UserPlace = sequelize.define('UserPlace', {
  user_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
          model: User,
          key: 'id'
      }
  },
  place_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
          model: Place,
          key: 'id'
      }
  }
}, {
  tableName: 'user_place',
  timestamps: false
});

// Associations
User.belongsToMany(Place, { through: UserPlace, foreignKey: 'user_id' });
Place.belongsToMany(User, { through: UserPlace, foreignKey: 'place_id' });
  
sequelize
.authenticate()
.then(() => {
    console.log(`postgres connected`)
})
.catch(err => {
    console.log(`postgres unable to connect, ${err}`)
})

module.exports = { User, Place, UserPlace };