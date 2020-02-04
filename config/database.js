module.exports = {
  username: 'root',
  password: 'PW',
  database: 'testes',
  host: 'localhost',
  dialect: 'mysql',
  timezone: '-03:00',
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  define: {
    //prevent sequelize from pluralizing table names
    freezeTableName: true,
    // don't add the timestamp attributes (updatedAt, createdAt)
    timestamps: false,
  },  
}


