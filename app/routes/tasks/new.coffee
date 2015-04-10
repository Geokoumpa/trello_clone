`import Ember from 'ember'`

TasksNewRoute = Ember.Route.extend
  model: (params)->
    project = @modelFor("project")
    list = project.get("lists.firstObject")
    @get('store').createRecord('task', project: project, list: list)

  actions:
    saveTask: (task)->
      route = @
      project = @modelFor("project")
      task.save().then ()->
        route.transitionTo 'project', project
    goBackAndDiscard: (task)->
      project = @modelFor("project")
      task.deleteRecord()
      @transitionTo 'project', project




`export default TasksNewRoute`
