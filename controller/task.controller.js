const express = require('express');
const router = express.Router();
const service = require('../service/task.service');

router.route('/')
      .get(service.getAllTasks)
      .post(service.addTask)

router.route('/:id')
      .get(service.getOneTask)
      .put(updateMiddleware, service.updateTask)
      .delete(service.deleteTask);

function updateMiddleware(req, res, next) {
    if (!req.body.taskBody) {
        return res.status(400).json({
            status: 'fail',
            message: 'body is missing',
        });
    }
    next();
}

module.exports = router;
