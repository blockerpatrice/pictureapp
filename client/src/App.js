import React from "react";
import { Route, Switch } from "react-router-dom";
import MyNavbar from "./navbar/MyNavbar.js";
import Home from "./homepage/Home.js";
import SearchPage from "./search/SearchPage.js";



function App () {
    return(
        <div>
            <MyNavbar />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/search" component={SearchPage} />
            </Switch>
        </div>
    )
}

export default App;