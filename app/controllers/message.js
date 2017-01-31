import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    newMessage: function () {
      var message = this.store.createRecord('message', {
        text: this.get('text'),
        room_id: this.get('room'),
        user_name: this.get('userName'),
        time_sent: this.get('time')
      });
      message.save();
    }
  }
});
