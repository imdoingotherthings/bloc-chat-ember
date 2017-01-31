import Ember from 'ember';

export default Ember.Component.extend({
  cookieMonster: Ember.inject.service(),

  userName: Ember.computed.reads('cookieMonster.cookies.userName'),

  actions: {
    setUserName: function () {
      this.get('cookieMonster').bake("userName", this.get('name'), 1);
    },

    logout: function () {
      this.get('cookieMonster').burn('userName');
    }
  },

  allCookies: Ember.computed('cookieMonster.cookies', function() {
    return JSON.stringify(this.get('cookieMonster.cookies'));
  })
});
