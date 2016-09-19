import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      description: "I am a <a href='https://google.com'>programmer</a> and musician in Dublin, Ireland.",
      links: [{
        title: "Twitter",
        href: "https://twitter.com/bobjlong",
        description: undefined
      }]
    };
  }
});
