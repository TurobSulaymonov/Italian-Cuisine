import React from "react";

import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { RippleBadge } from "./material/MaterialTheme/styled";
import { Link, Route, Switch } from "react-router-dom";
import { Users } from "./screens/userPage";
import { About } from "./screens/aboutPage/about";




function App() {
  return (
       <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
        <Users />
      </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
  );

          }
function Home() {
  return <Container>Home</Container>;
}





export default App;