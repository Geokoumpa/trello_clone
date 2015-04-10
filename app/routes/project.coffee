`import Ember from 'ember'`

ProjectRoute = Ember.Route.extend
  model: (params)->
    @get('store').find('project', params.id)

`export default ProjectRoute`
