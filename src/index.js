const express = require('express');
require('./db/mongoose')
// const User = require('./models/user')
// const Task = require('./models/task');
const { Router } = require('express');
const multer = require('multer');

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('Get request are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Site is under maintainance')
// })

const upload = multer({
    dest: 'images',
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(doc|docx)$/)) {
            return cb(new Error('Please upload document'))
        }
        cb(undefined, true)
    }
})

// const errorMiddleware = (req, res, next) => {
//     throw new Error('From my middleware')
// }

app.post('/upload', upload.single('upload'), (req, res) => {
    res.send()
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
})

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port);
})

// const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//     const token = jwt.sign({ _id: 'abc123' }, 'thisismycourse', { expiresIn: '7 days' })
//     console.log(token);

//     const data = jwt.verify(token, 'thisismycourse')
//     console.log(data);
// }

// myFunction()

// Video 112 ...

// const pet = {
//     name: 'Hal'
// }

// pet.toJSON = function() {
//     console.log(this);
//     return {}
// }

// console.log(JSON.stringify(pet));

// Video 114 ...

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
    // const task = await Task.findById('5fdcb45c3f82ab3044105ea0')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner);

    // const user = await User.findById('5fdcb40fdfb0f936bcadda04')
    // await user.populate('tasks').execPopulate()
    // console.log(user.tasks);

}

main()