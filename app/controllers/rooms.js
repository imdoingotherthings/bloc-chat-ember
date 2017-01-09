import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    newChatRoom: function () {
      var room = this.getProperties("room")
      var newRoom = this.store.createRecord('room', {
        name: room
      });
      newRoom.save();
    }
  }
});
