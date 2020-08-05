import React, { Component } from 'react';
import './SearchBar.css';
import {withProvider} from "../GlobalProvider.js";
import axios from 'axios';
import ImgList from '../unsplashcomponents/ImgList.js'

class SearchPage extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            search: "", 
            imgs:[]
        }
    }

    setSearch = (event) => {
        event.preventDefault();
        this.setState({
          search: event.target.value
        }, () => {
            this.props.setSearchWordProp(this.state.search);
        })
    }

    componentDidMount(){
        axios.get(
            `https://api.unsplash.com/search/photos/?page=1&per_page=10&query=${this.props.searchword}&client_id=734bbebaa77968a6b81ac40081466b1648ab43246609e5ec00aff533cd24d775`
            )
            .then(data => {
            this.setState({ imgs: data.data.results });
            })
            .catch(err => {
            console.log('Error happened during fetching!', err);
        });
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        console.log("test");
        axios.get(
            `https://api.unsplash.com/search/photos/?page=1&per_page=10&query=${this.props.searchword}&client_id=734bbebaa77968a6b81ac40081466b1648ab43246609e5ec00aff533cd24d775`
            )
            .then(data => {
            this.setState({ imgs: data.data.results });
            })
            .catch(err => {
            console.log('Error happened during fetching!', err);
        });
    }

    render() { 
        return (
            <div>
                <div className="pencils">
                    <div className="text"> Search and Download images for Free</div>
                    <form onSubmit = {this.handleSubmit}>
                        <div className="search-bar"> 
                            <div className="input-group mb-3">
                                <input type="text" onChange={this.setSearch} value={this.state.search}  className="form-control" placeholder="Search free photos" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                <input type="submit" className="search-button2"/>   
                            </div>
                        </div>
                    </form>
                </div>

                <div className="container">
                    <ImgList data={this.state.imgs} />
                </div>
            </div>
        );
    }
}
 
export default withProvider(SearchPage);