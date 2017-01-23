import Ember from 'ember';

export default Ember.Component.extend({
  cookieMonster: Ember.inject.service(),

  userName: Ember.computed.reads('cookieMonster.cookies.userName'),

  // userAvailable: Ember.computed('cookieMonster.cookies.userName'), function () {
  //   this.get('cookieMonster.cookies.userName');
  // },
  //   // This is where the modal goes.
    // If the cookies show that a user has been here, do not

  allCookies: Ember.computed('cookieMonster.cookies', function() {
    return JSON.stringify(this.get('cookieMonster.cookies'));
  })
});
