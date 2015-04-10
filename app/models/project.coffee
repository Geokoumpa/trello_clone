`import DS from 'ember-data'`

Project = DS.Model.extend
  title: DS.attr 'string'

  lists: DS.hasMany 'list', async: true
  tasks: DS.hasMany 'task', async: true

  listsCount: (->
    @get('lists.length')
  ).property('lists.@each')

  tasksCount: (->
    @get('tasks.length')
  ).property('tasks.@each')

`export default Project`
