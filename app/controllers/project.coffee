`import Ember from 'ember'`

ProjectController = Ember.Controller.extend
  actions:
    moveToList: (task, options)->
      task.set("list", options.target.list)
      task.save()

`export default ProjectController`
