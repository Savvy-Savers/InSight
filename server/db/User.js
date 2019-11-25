module.exports = (sequelize, type) => {
    return sequelize.define('user', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        full_name: type.STRING,
        email: type.STRING,
        amount: type.INTEGER
    });
};
