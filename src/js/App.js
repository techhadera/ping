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
            {/* <h1>settings view</h1> */}
            <SettingsView />
          </Route>
          <Route path="/login">
            {/* <h1>login view</h1> */}
            <LoginView />
          </Route>
          <Route path="/register">
            {/* <h1>register view</h1> */}
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
