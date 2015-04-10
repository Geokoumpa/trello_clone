`import Ember from 'ember'`

IndexRoute = Ember.Route.extend
  model: ->
    @get('store').find('project')

`export default IndexRoute`
