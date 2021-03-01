const mongoose = require('mongoose');
// const validator = require('validator');

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

// const User = mongoose.model('User', {
//     name: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         lowercase: true,
//         validate(value) {
//             if (!validator.isEmail(value)) {
//                 throw new Error('Email Invalid!')
//             }
//         }
//     },
//     password: {
//         type: String,
//         required: true,
//         minLength: 7,
//         trim: true,
//         validate(value) {
//             if (value.toLowerCase().includes('password')) {
//                 throw new Error('Password cannot contains "password"')
//             }
//         }
//     },
//     age: {
//         type: Number,
//         default: 0,
//         validate(value) {
//             if (value < 0) {
//                 throw new Error('Age must be positive number...')
//             }
//         }
//     }
// })

// const me = new User({
//    name: ' Happy ',
//    email: 'HappyPatel@gmail.com ',
//    password: 'phone098!'
// })

// me.save().then(() => {
//     console.log(me);
// }).catch((error) => {
//     console.log('Error :',error);
// })

// const Task = mongoose.model('Task', {
//     description: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     }
// })

// const task = new Task({
//     description: '  Eat lunch',
// })

// task.save().then(() => {
//     console.log(task);
// }).catch((error) => {
//     console.log('Error :',error);
// })