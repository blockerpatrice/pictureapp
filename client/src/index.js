
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";
import { BrowserRouter } from "react-router-dom";
import Provider from "./GlobalProvider";

ReactDOM.render(
        <BrowserRouter>
            <Provider>
                <App/>
            </Provider>
        </BrowserRouter>,
document.getElementById('root'))
