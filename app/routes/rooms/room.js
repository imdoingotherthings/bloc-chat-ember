import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      room: this.store.findRecord('room', params.room_id),
      messages: this.store.findAll('messages')
    });
  }
});
