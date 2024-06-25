console.log("Hello from Webpack in mainView.js!");

import Backbone from "backbone";

const MainView = Backbone.View.extend({
  el: "#app",
  initialize: function () {
    this.render();
  },
  render: function () {
    this.$el.html("Hello Backbone with Webpack!");
  },
});

export default MainView;

setTimeout(() => {
  console.log("Hello from Webpack in mainView2.js!");
}, 5000);
