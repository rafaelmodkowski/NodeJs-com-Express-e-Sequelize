module.exports = function (sequelize, DataTypes) {

    const Exemplo = sequelize.define('Exemplo', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING(45),
        },
        email: {
            allowNull: false,
            type: DataTypes.STRING(100),
        },
        password: {
            allowNull: false,
            type: DataTypes.STRING(20),
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE,
        },
    });
    
    return Exemplo;
    
}