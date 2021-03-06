var db = require("../models");

module.exports = function (app) {

    app.get("/", function (req, res) {

        db.burger.findAll({

        }).then(function (data) {

            const objectB = {
                burgers: data
            }
            res.render("index", objectB)
        })
    })

    app.post("/api/burgers", function (req, res) {

        let newBurger = req.body
        console.log(newBurger)
        db.burger.create({

            name: newBurger.name,
            eaten: false

        }).then(function (result) {
            return res.json({ id: result.insertId });
        })
    })

    app.put("/api/burgers/:id", function (req, res) {
        db.burger.update(
            { eaten: true },
            { returning: true, where: { id: req.params.id } }
        ).then(function (result) {
            return res.json(result)
        })
    })

    app.delete("/api/burgers/:id", function (req, res) {
        db.burger.destroy({
            where: { id: req.params.id }
        }
        ).then(function (result) {
            return res.json(result);
        });
    });

}