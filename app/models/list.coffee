`import DS from 'ember-data'`

List = DS.Model.extend
  title: DS.attr 'string'

  tasks: DS.hasMany 'task', async: true
  project: DS.belongsTo 'project', async: true


`export default List`
