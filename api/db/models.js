const Sequelize = require('sequelize');
const sequelize = require('./index.js')

const User = sequelize.define('user', {
    id: {
      type: Sequelize.BIGINT, // Sequelize uses BIGINT for large integers like bigserial
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: Sequelize.TEXT,
      allowNull: false,
      unique: true, // Ensures the email field is unique
    },
    username: {
      type: Sequelize.TEXT,
      allowNull: false,
      unique: true, // Ensures the username field is unique
    },
    password: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    date_created: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
    date_updated: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
    date_archived: {
      type: Sequelize.DATE,
      allowNull: true,
    },
  }, {
    tableName: 'user', // Specifies the table name
    timestamps: false, // Since we manually define `date_created` and `date_updated`
  });

const Business = sequelize.define('business', {
    id: {
      type: Sequelize.BIGINT, // BIGINT for the primary key
      primaryKey: true,
      autoIncrement: true, // Auto increment for the id field
    },
    businesses_id: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    businesses_name: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    businesses_rating: {
      type: Sequelize.DECIMAL(8, 2),
      allowNull: false,
    },
    url: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    image_url: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    location_address1: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    location_city: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    location_state: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    location_country: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    location_zip_code: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    price: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    categories_title: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    date_created: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
    date_updated: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
    date_archived: {
      type: Sequelize.DATE,
      allowNull: true,
    },
  }, {
    tableName: 'business', // Specifies the table name
    timestamps: false, // Since we manually define `date_created` and `date_updated`
  });

  // Foreign key constraint linking Business to User
Business.associate = () => {
    Business.belongsTo(User, {
      foreignKey: 'id',
      as: 'user',
    });
  };

sequelize
.authenticate()
.then(() => {
    console.log(`postgres connected`)
})
.catch(err => {
    console.log(`postgres unable to connect, ${err}`)
})

module.exports = { User, Business }