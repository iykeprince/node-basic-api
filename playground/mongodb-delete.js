const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
       return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Users').find({
    //     name: 'John',
    //     age:31,
    //     location: 'New York'
    // }, ( err, result ) => {
    //     if(err){
    //         return console.log('Unable to insert user', err)
    //     }

    //     console.log(JSON.stringify(result, undefined, 2));
    // })

    // db.collection('Todos').find().toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //      console.log('Unable to fetch todos', err);
    // });
    db.collection('Todos').findOneAndDelete({_id: new ObjectID("60b12da3693d7a55a0e98aef")}).then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
         console.log('Unable to fetch todos', err);
    });

    // db.close();
});