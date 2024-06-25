import $ from "jquery";
import Backbone from "backbone";
import LoginView from "./views/loginView";
import MainView from "./views/mainView";
import SignupView from "./views/signupView";
import "./styles/main.css";
console.log("Hello from Webpack in Index JS!");

$(document).ready(() => {
  const mainView = new MainView();
  mainView.render();

  const loginView = new LoginView();
  loginView.render();

  const signupView = new SignupView();
  signupView.render();
});
