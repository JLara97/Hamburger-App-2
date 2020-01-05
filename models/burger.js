module.exports = function (Sequelize, Datatypes) {
    const Burger = Sequelize.define("burger", {
        name: Datatypes.STRING,
        eaten: Datatypes.BOOLEAN
    }, {
        timestamps: false
    });

    return Burger;
}