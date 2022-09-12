const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name of task']
    }
});

const Task = mongoose.model('task', taskSchema);

module.exports = Task;
