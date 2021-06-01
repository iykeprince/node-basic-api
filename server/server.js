const express = require('express')
const bodyParser = require('body-parser')

const { mongoose } = require('./db/mongoose')
const { Todo } = require('./models/todo')
const { User}  = require('./models/user')

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
})

app.listen(3000, () => console.log(`Started on port 3000`))

module.exports = { app }