const router = require('express').Router();
// import router actions from controller

const actions = require('../controllers/task.controller.js');

// get all tasks

router.get('/', actions.getAllTasks);

// get one task by id

router.get('/:id', actions.getSingleTask);

// post a task 

router.post('/', actions.postTask);

// delete a task 

router.delete('/:id', actions.deleteOneTask);

// update remainder of a task

router.patch('/:id', actions.updateRemainder);

// update full task

router.put('/:id', actions.updateTask);

// export router

module.exports = router;