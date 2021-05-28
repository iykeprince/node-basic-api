const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
       return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Users').findOneAndUpdate(
        {_id: new ObjectID("60b12ea009ea315b30ac7bae")}, 
        {
            $set: {
                name: 'Anthonio Banderas',
            },
            $inc: {
                age: 1
            }
        }, {
            returnOriginal: false
        }).then((result) => {
        console.log('Result');
        console.log(JSON.stringify(result, undefined, 2));
    }, (err) => {
         console.log('Unable to fetch todos', err);
    });

    // db.close();
});