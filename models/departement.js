const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Departement extends Model {

    static associate({ User }) {

      this.hasMany(User)
    }
  }
  Departement.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Departement',
  });
  return Departement;

};