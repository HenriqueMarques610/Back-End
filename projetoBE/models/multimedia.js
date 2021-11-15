module.exports = (sequelize, type) => {
    return sequelize.define('multimedia', {
        multimedia_ID: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        game_ID: {
            type: type.INTEGER,
        },
        multimedia: {
            type: type.TEXT,
        },
    },{
        timestamps: false
    })
}