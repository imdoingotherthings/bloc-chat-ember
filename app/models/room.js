import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  room_id: DS.attr('string')
});
