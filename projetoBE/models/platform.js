module.exports = (sequelize, type) => {
    return sequelize.define('platforms', {
        platform_ID: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        namePlatform: {
            type: type.TEXT,
        },
    },{
        timestamps: false
    })
}