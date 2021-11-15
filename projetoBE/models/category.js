module.exports = (sequelize, type) => {
    return sequelize.define('categories', {
        category_ID: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        nameCategory: {
            type: type.TEXT,
        },
    },{
        timestamps: false
    })
}