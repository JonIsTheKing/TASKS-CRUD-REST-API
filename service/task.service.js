const Task = require('../models/task.model');

const getAllTasks = async (req, res) => {
    try {
        const data = await Task.find();

        res.status(200).json({
            status: 'Success',
            data,
        });
    } catch (err) {
        err.message = 'Could not fetch the tasks';
        res.status(404).json({
            status: 'fail',
            message: err.message,
        });
    }
};

const getOneTask = async (req, res) => {
    try {
        const data = await Task.find({_id: (req.params.id).toString()});

        if (!data.length) throw err;

        res.status(200).json({
            status: 'Success',
            data,
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: 'No such task found',
        });
    }
};

const addTask = async (req, res) => {
    try {
        const name = req.body.taskBody;
        const newTask = new Task({ name });

        newTask.save((err, result) => {
            if (err) throw err;
            res.status(200).json({
                status: 'Success',
                message: result
            });
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: 'Error occurred while saving'
        });
    }
}

const updateTask = async (req, res) => {
    try {
        const name = req.body.taskBody;

        const updatedTask = await Task.findByIdAndUpdate({_id: (req.params.id).toString()}, { name }, { new: true });
            
        res.status(200).json({
            status: 'Success',
            message: updatedTask
        });
    } catch (err) {
        console.log(err);
        res.status(400).json({
            status: 'fail',
            message: 'Error occurred while updating'
        });
    }
}

const deleteTask = async (req, res) => {
    try {
        const deletedTask = await Task.findByIdAndDelete({_id: (req.params.id).toString()});
            
        res.status(200).json({
            status: 'Success',
            message: deletedTask
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: 'Error occurred while updating'
        });
    }
}

module.exports = { getAllTasks, getOneTask, addTask, updateTask, deleteTask};
