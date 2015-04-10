`import DS from 'ember-data'`

ApplicationAdapter = DS.ActiveModelAdapter.extend
  namespace: 'api'
  coalesceFindRequests: true

`export default ApplicationAdapter`
