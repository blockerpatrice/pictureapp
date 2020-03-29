import React, {Component} from 'react';
import axios from 'axios';

const MyContext = React.createContext();

class GlobalProvider extends Component {
    constructor() {
        super()
        this.state = {
            imgs: [],
            searchword: '',
            user: JSON.parse(localStorage.getItem("user")) || {},
            token: localStorage.getItem("token") || ""
        }
    }

    
    signup = userInfo => {
        //userInfo is an object with username and pass fields
         return axios.post("/auth/signup", userInfo)
            .then(response => {
                const { user, token } = response.data
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));
                this.setState({
                    user,
                    token
                });
                return response;
        });   
    }

    login = (credentials) => {
        return axios.post("/auth/login", credentials)
            .then(response => {
                const { token, user } = response.data;
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));
            })
    }

    login = credentials => {
        return axios.post("/auth/login", credentials)
            .then(response => {
                const { token, user } = response.data;
                localStorage.setItem("token", token)
                localStorage.setItem("user", JSON.stringify(user))
                this.setState({
                    user,
                    token
                });
                
                return response;
            })
    }

    saveImg = imginfo => {
        return axios.post("/auth/loggedin", imginfo)
            .then(response => {
                this.setState({
                    imgs : imginfo
                });
                return response;
            })
    }
    
    logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        this.setState({
            todos: [],
            user: {},
            token: ""
        })
    }

    setSearchWordProp = newValue => {
        this.setState({searchword:newValue});

    }
    
    render() {
        return (
            <MyContext.Provider
                value={{
                    ...this.state,
                    signup: this.signup,
                    login: this.login, 
                    logout: this.logout,
                    saveImg: this.saveImg,
                    setSearchWordProp:this.setSearchWordProp
                }}
            >
                {this.props.children}
            </MyContext.Provider>
        )
    }
}
 
export default GlobalProvider;

export const withProvider = C => props => (
    <MyContext.Consumer>
        {value => <C {...value} {...props} /> }
    </MyContext.Consumer>
)