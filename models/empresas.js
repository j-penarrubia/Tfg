module.exports = (sequelize, DataTypes) => {
    const empresas = sequelize.define('empresas', {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true, // equivale a generated by default as identity
        allowNull: false
      },
      created_at: {
        type: DataTypes.DATE,  // timestamp with time zone
        allowNull: false,
        defaultValue: DataTypes.NOW
      },
      nombre: {
        type: DataTypes.STRING, // character varying (sin límite)
        allowNull: true
      },
      cif: {
        type: DataTypes.STRING,
        allowNull: true
      },
      sector: {
        type: DataTypes.STRING,
        allowNull: true
      }
    }, {
      tableName: 'empresas',
      timestamps: false, // como usás created_at manualmente, no uses timestamps automáticos
    });
  
    return empresas;
  };