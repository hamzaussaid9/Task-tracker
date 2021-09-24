const Task = require('../models/tasks.model.js');

exports.getAllTasks =  async (req, res) =>{
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error){
        res.json(error);
    }
}
exports.getSingleTask =  async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        res.json(task);
    } catch (error) {
        res.json(error);
    }
}

exports.postTask = async (req, res) => {
    const task = new Task({
        text: req.body.text,
        day: req.body.day,
        remainder: req.body.remainder

    })
    console.log(task);
    try {
        const savedTask = await task.save();
        res.json(savedTask);
    } catch (error) {
        res.json(error);
    }
}

exports.deleteOneTask = async (req, res) => {
    try {
        const deletePost = await Task.deleteOne({ _id: req.params.id });
        res.json(deletePost);
    } catch (error) {
        res.json(error);
    }
}

exports.updateRemainder = async (req, res) => {
    try {
        const getsingleTask = await Task.findById(req.params.id);
        const updatedTask = await Task.updateOne({ _id: req.params.id }, {
            $set: {
            remainder: !getsingleTask.remainder
        }
        })
        res.json(updatedTask);
    } catch (error) {
        res.json(error);
    }
}

exports.updateTask = async (req, res) => {
    try {
        const editedTask = await Task.findByIdAndUpdate(req.params.id, {
            text: req.body.text,
            day: req.body.day,
            remainder: req.body.remainder
        })
        res.json(editedTask);
    } catch (error) {
        res.json(error);
    }
}