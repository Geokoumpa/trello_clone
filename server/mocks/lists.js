module.exports = function(app) {
  var express = require('express');
  var listsRouter = express.Router();

  var allLists = [
  {id: 1,  title: 'Todo', project_id: 1, task_ids: [1,2]},
  {id: 2,  title: 'Doing', project_id: 1, task_ids: []},
  {id: 3,  title: 'Done', project_id: 1, task_ids: []},
  {id: 4,  title: 'Todo', project_id: 2, task_ids: [3,4]},
  {id: 5,  title: 'Doing', project_id: 2, task_ids: []},
  {id: 6,  title: 'Done', project_id: 2, task_ids: []},
  {id: 7,  title: 'Todo', project_id: 3, task_ids: [5,6]},
  {id: 8,  title: 'Doing', project_id: 3, task_ids: []},
  {id: 9,  title: 'Done', project_id: 3, task_ids: []}


      ]


  listsRouter.get('/', function(req, res) {
    res.send({
      'lists': allLists
    });
  });

  listsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  listsRouter.get('/:id', function(req, res) {
    res.send({
      'lists':
          allLists.filter(function(list){
              return list.id == req.params.id
          })[0]

    });
  });

  listsRouter.put('/:id', function(req, res) {
    res.send({
      'lists': {
        id: req.params.id
      }
    });
  });

  listsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/lists', listsRouter);
};
