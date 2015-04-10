module.exports = function(app) {
  var express = require('express');
  var tasksRouter = express.Router();

  var allTasks = [
        {id: 1, title: "First task", description: "To complete first task", list_id: 1, project_id: 1},
        {id: 2, title: "Second task", description: "To complete second task", list_id: 1, project_id: 1},
        {id: 3, title: "First task", description: "To complete first task", list_id: 4, project_id: 2},
        {id: 4, title: "Second task", description: "To complete second task", list_id: 4, project_id: 2},
        {id: 5, title: "First task", description: "To complete first task", list_id: 7, project_id: 3},
        {id: 6, title: "Second task", description: "To complete second task", list_id: 7, project_id: 3}
      ]


  tasksRouter.get('/', function(req, res) {
    res.send({
      'tasks': allTasks
    });
  });

  tasksRouter.post('/', function(req, res) {
      res.send(req.body);
  });

  tasksRouter.get('/:id', function(req, res) {
    res.send({
      'tasks':
          allTasks.filter(function(task){
              return task.id == req.params.id
          })[0]

    });
  });

  tasksRouter.put('/:id', function(req, res) {
    res.send({
      'tasks': {
        id: req.params.id
      }
    });
  });

  tasksRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/tasks',require('body-parser').json(), tasksRouter);
};
