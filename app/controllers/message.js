import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    newMessage: function () {
      var message = this.store.createRecord('message', {
        text: 'Hello',
        room_id: 'reference',
        user_name: 'John',
        time_sent: '3:54pm'
      });
      newRoom.save();
    }
  }
});
