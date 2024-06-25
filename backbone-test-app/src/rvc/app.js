console.log("Hello from Webpack in app.js!");

import Backbone from "backbone";

const App = Backbone.Model.extend({
  initialize: function () {
    console.log("Backbone app initialized");
  },
});

export default App;
