module.exports = (sequelize, type) => {
    return sequelize.define('users', {

        users_ID: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        firstname: {
            type: type.TEXT,
        },
        lastname: {
            type: type.TEXT,
        },
        userName: {
            type: type.TEXT,
        },
        email: {
            type: type.TEXT,
        },
        password: {
            type: type.TEXT,
        },
        birthDate: {
            type: type.DATE,
        },
    },{
        timestamps: false
    })
}