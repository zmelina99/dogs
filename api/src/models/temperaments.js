const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    const Temperament = sequelize.define('temperament', {
        id: {
          type: DataTypes.UUID, 
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false 
        } 
      });
    };