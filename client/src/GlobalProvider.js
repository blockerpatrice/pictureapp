import React, {Component} from 'react';
import axios from 'axios';

const MyContext = React.createContext();

class GlobalProvider extends Component {
    constructor() {
        super()
        this.state = {
            imgs: [],
            searchword: '',
            token: localStorage.getItem("token") || ""
        }
    }

    setSearchWordProp = newValue => {
        this.setState({searchword:newValue});
    }
    
    render() {
        return (
            <MyContext.Provider
                value={{
                    ...this.state,
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