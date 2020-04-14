const userDao = require('../daos/users.dao.server')

module.exports = (app) => {
    app.post('/api/users', (req, res) => {
        const newUser = req.body
        userDao.createUser(newUser)
            .then(actualUser => res.send(actualUser))
    })
    app.get('/api/users', (req, res) =>
        userDao.findAllUsers()
            .then(allUsers => res.send(allUsers))
    )

}


