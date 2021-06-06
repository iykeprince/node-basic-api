const express = require('express')
const bodyParser = require('body-parser')
const _ = require('lodash')

const { mongoose } = require('./db/mongoose')
const { Todo } = require('./models/todo')
const { User}  = require('./models/user')
const { ObjectID } = require('bson')

const app = express();

app.use(bodyParser.json())

app.post('/todos', (req, res) => {
    console.log('text', req.body.text);
    return;
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then(doc => {
        res.send(doc)
    }, error => {
        res.status(400).send(error)
    });
});

app.get('/todos', (req, res) => {
    console.log('todos')
    Todo.find().then(todos => {
            res.send({todos});
        }, 
        (error) => {
            res.status(400).send(error);
        }
    );
});

app.get('/todos/:id', (req, res) => {
    const id = req.params.id;

    if(!ObjectID.isValid(id)){
        return res.status(404).send()
    }

    Todo.findById(id).then(todo => {
        if(!todo){
            return res.status(404).send()
        }
        res.send({todo})
    }, (e) => res.status(400).send())
});

app.post('/users', (req, res) => {
    var body = _.pick(req.body, ['email', 'password'])
    var user = new User(body);

    user.save().then(() => {
        return user.generateAuthToken();
    }).then((token) => {
        res.header('x-auth', token).send(user)
    }).catch((e) => {
        res.status(400).send(e)
    })
});

app.listen(3000, () => console.log(`Started on port 3000`))

module.exports = { app }