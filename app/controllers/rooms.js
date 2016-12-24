import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    newChatRoom: function () {
      var newRoom = this.store.createRecord('room', {
        name: this.get('name')
      });
      newRoom.save();
    }
  }
});
