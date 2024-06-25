import $ from "jquery";
import Backbone from "backbone";
import LoginView from "./views/loginView.js";
import MainView from "./views/mainView.js";
import SignupView from "./views/signupView.js";
import "./styles/main.css";
console.log("Hello from Webpack in Index.js!");

$(document).ready(() => {
  const mainView = new MainView();
  mainView.render();

  const loginView = new LoginView();
  loginView.render();

  const signupView = new SignupView();
  signupView.render();
});
