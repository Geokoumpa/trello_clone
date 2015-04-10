`import Ember from 'ember'`

TasksNewRoute = Ember.Route.extend
  model: (params)->
    project = @modelFor("project")
    list = project.get("lists.content.firstObject")
    @get('store').createRecord('task', project: project, list: list)

  actions:
    saveTask: (task)->
      route = @
      project = @modelFor("project")
      task.save().then ()->
        route.transitionTo 'project', project

    willTransition: (transition)->
      task = @controller.get("content")
      task.deleteRecord() if task.get("isDirty")




`export default TasksNewRoute`
