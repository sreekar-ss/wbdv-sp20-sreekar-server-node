const express = require('express')
const app = express()
const mongoose = require('mongoose')
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var connectionString = 'mongodb://localhost:27017/whiteboard-cs5610-sp20'

if(process.env.MLAB_USERNAME_WEBDEV) {
    var username = process.env.MLAB_USERNAME_WEBDEV;
    var password = process.env.MLAB_PASSWORD_WEBDEV;
    connectionString = 'mongodb://' + username + ':' + password;
    connectionString += '@ds127878.mlab.com:27878/heroku_mfg60d8t';
}

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'https://wbdv-sp20-sreekar-angular-c2.herokuapp.com');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});


require('./controllers/quizzes.controller.server.js') (app)
require('./controllers/questions.controller.server') (app)
require('./controllers/users.controller.server') (app)
require('./controllers/quiz-attempts.controller.server')(app)

app.get('/hello', (req, res) => res.send('Hwllo World'))

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
