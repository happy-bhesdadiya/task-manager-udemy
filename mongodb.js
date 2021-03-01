// Video 75... - CRUD 

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id.id.length);
// console.log(id.getTimestamp());
// console.log(id.toHexString().length);

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    if (error) {
        return console.log('Unable to Connect to Database!');
    } 

    // console.log('Connected Correctly!');
    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'Vikram',
    //     age: 26
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to Insert User');
    //     }

    //     console.log(result.ops);
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 20
    //     },
    //     {
    //         name: 'John',
    //         age: 25
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to Insert User');
    //     }
    //     console.log(result.ops);  
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Clean the house',
    //         completed: true
    //     },
    //     {
    //         description: 'Renew Inspection',
    //         completed: false
    //     },
    //     {
    //         description: 'Put Plants',
    //         completed: false
    //     }

    // ], (error, result) => {
    //         if (error) {
    //             return console.log('Unable to Insert User');
    //         }
    //         console.log(result.ops);  
    //     })


    // Video 78...

    // db.collection('users').findOne({ _id: new ObjectID("5fae8e343e3797295c35f0df") }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch');
    //     }
    //     console.log(user);
    // })

    // db.collection('users').find({ age: 22 }).toArray((error, users) => {
    //     if (error) {
    //         return console.log('Unable to fetch');
    //     }
    //     console.log(users);
    // }) 

    // db.collection('users').find({ age: 22 }).count((error, users) => {
    //     if (error) {
    //         return console.log('Unable to fetch');
    //     }
    //     console.log(users);
    // }) 
    
    // db.collection('tasks').find({ completed: false }).toArray((error, tasks) => {
    //     console.log(tasks);
    // })


    // Video 80...

    // db.collection('users').updateOne({
    //     _id: new ObjectID('5fae87ef90322c0698cd7942')
    // }, { 
    //     // $set : { 
    //     // name: 'Mike'
    //     // }
        
    //     $inc : {
    //         age: 1
    //     }

    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })

    // db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set : {
    //         completed : true
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error);
    // })


    // Video 81...

    // db.collection('users').deleteOne({
    //     age : 20
    // }).then((res) => {
    //     console.log(res);
    // }).catch((err) => {
    //     console.log(err);
    // })

})