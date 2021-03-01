// Video 95... Promise Challenge

require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5fb11b02afc99700e419d264').then((task) => {
//     console.log(task);
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e);
// })

// Video 96...

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false})
    return count
}

deleteTaskAndCount('5fb11affafc99700e419d263').then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
})