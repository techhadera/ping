import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HomeView from "./views/Home";
import LoginView from './views/Login';
import RegisterView from './views/Register';
import SettingsView from './views/Settings';
import ChatView from './views/Chat';

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="content-wrapper">
        <Switch>
          <Route path="/settings">
            <SettingsView />
          </Route>
          <Route path="/login">
            <LoginView />
          </Route>
          <Route path="/register">
            <RegisterView />
          </Route>
          <Route path="/chat/:id">
            <ChatView />
          </Route>
          <Route path="/" exact>
            <HomeView />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
