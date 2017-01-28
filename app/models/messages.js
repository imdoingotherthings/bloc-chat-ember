import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr('string'),
  room_id: DS.attr('string'),
  user_name: DS.attr('string'),
  time_sent: DS.attr('string')
});
