import React, {Component} from "react";
import { Link } from "react-router-dom";
import { withProvider } from "../GlobalProvider.js";
import "./MyNavbar.css";
import "../App.css"


class MyNavbar extends Component {

    handleLogout = (event) => {
        event.preventDefault();
        this.props.logout();
        alert("You've logged out");
    }
    
    render() {
    return (
            
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            {
                !this.props.token ?
                    <React.Fragment>
                        <div>
                            <Link to="/" className="logo">Picture App</Link>
                        </div>
                        {/* <div>
                            <Link to="/signup" className="nav-link">Sign Up</Link>
                        </div>

                        <div>
                            <Link to="/login" className="nav-link">Log In</Link>
                        </div> */}

                    </React.Fragment>
                :
                    <React.Fragment>
                        <div className="welcome">
                           Welcome {this.props.user.username}
                        </div>

                        <div>
                            <Link to="/saved" className="nav-link">Saved Images</Link>
                        </div>
                
                        <div>
                            <button className="logout-button" onClick={this.handleLogout}>Logout</button>
                        </div>
                    </React.Fragment>
            }
            </nav>
         
    )
        }
 
}

export default withProvider(MyNavbar);