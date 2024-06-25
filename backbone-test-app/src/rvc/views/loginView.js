console.log("Hello from Webpack in loginView.js!");

import Backbone from "backbone";
import _ from "underscore";
import loginTemplate from "../template/loginTemplate.html";

const LoginView = Backbone.View.extend({
  el: "#login",
  template: _.template(loginTemplate),
  events: {
    "submit #login-form": "login",
  },
  initialize: function () {
    this.render();
  },
  render: function () {
    this.$el.html(this.template());
    return this;
  },
  login: function (event) {
    event.preventDefault();
    const username = this.$("#username").val();
    const password = this.$("#password").val();
    alert(`Username: ${username}, Password: ${password}`);
  },
});

export default LoginView;
