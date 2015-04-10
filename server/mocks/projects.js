module.exports = function(app) {
  var express = require('express');
  var projectsRouter = express.Router();

  var allProjects = [
    {id: 1, title: 'First Project', list_ids: [1,2,3], task_ids: [1,2]},
    {id: 2, title: 'Second Project', list_ids: [4,5,6], task_ids: [3,4]},
    {id: 3, title: 'Third Project', list_ids: [7,8,9], task_ids: [5,6]}
  ]



  projectsRouter.get('/', function(req, res) {
    res.send({
      'projects': allProjects
    });
  });

  projectsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  projectsRouter.get('/:id', function(req, res) {
    res.send({
      'projects':
          allProjects.filter(function(project){
              return project.id == req.params.id
          })[0]

    });
  });

  projectsRouter.put('/:id', function(req, res) {
    res.send({
      'projects': {
        id: req.params.id
      }
    });
  });

  projectsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/projects', projectsRouter);
};
