var App = App || {};

App.Note = Backbone.Model.extend({
  defaults: {
    title: '',
    about: '',
    text: ''
  }
});