const db = require('../../database/models');
const sequelize = db.sequelize;

const moviesController = {
    create: (req, res) => {
        db.Movie.create(req.body)
        .then(movie => {
            return res.status(200).json({
                data: movie,
                status: 200,
                created: 'ok'
            })
        })

    },
    destroy: (req, res) => {

        db.Movie.destroy({
            where: {id: req.params.id}})
            .then(response => {
                return res.json(response)
            })
    },
}

module.exports = moviesController;