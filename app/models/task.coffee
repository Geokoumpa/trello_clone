`import DS from 'ember-data'`

Task = DS.Model.extend
  title: DS.attr 'string'
  description: DS.attr 'string'

  list: DS.belongsTo 'list', async: true
  project: DS.belongsTo 'project', async: true




`export default Task`
