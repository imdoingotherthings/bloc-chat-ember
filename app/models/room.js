import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string')
  // var newRoom = this.store.createRecord('room', {
  //   name: 'EmberFire is flaming hot!',
  // });
  // newRoom.save();
});
