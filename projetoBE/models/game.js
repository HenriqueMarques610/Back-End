module.exports = (sequelize, type) => {
    return sequelize.define('games', {
        game_ID: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        gameName: {
            type: type.TEXT,
        },
        pegi: {
            type: type.INTEGER,
        },
        preco: {
            type: type.FLOAT,
        },
        stock: {
            type: type.INTEGER,
        },
        minimum_Requirement: {
            type: type.TEXT,
        },
        recommended_Requirement: {
            type: type.TEXT,
        },
        description: {
            type: type.TEXT,
        },
        releaseDate: {
            type: type.DATE,
        },
        image:{
            type:type.TEXT,
        }
    },{
        timestamps: false
    })
}