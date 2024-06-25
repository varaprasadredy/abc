console.log("Hello from Webpack in signup.js!");

import Backbone from "backbone";
import _ from "underscore";
import signupTemplate from "../template/signupTemplate.html";

const SignupView = Backbone.View.extend({
  el: "#signup",
  template: _.template(signupTemplate),
  events: {
    "submit #signup-form": "Signup",
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
    const firstName = this.$("#firstname").val();
    const email = this.$("#email").val();
    alert(`Firstname: ${firstName}, Email: ${email}`);
  },
});

export default SignupView;
