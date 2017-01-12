import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // console.log(params)
    return this.store.findRecord('room');
  }
});
