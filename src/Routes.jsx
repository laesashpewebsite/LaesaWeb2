import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Login"
import Main from "./App";
// import Room from "./Room";
// import User from "./User";

export default ()=>(
    <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/Main" component={Main} />
        {/* <Route exact path ="/Room" component={Room}/>
        <Route exact path ="/Room/:id" component={Room}/>
        <Route path ="/Room/:id/:user" component={Room}/>
        <Route path ="/User" component={User}/> */}
    </Switch>    
);
