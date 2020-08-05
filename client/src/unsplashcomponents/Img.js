import React, {Component} from 'react';
import {withProvider} from '../GlobalProvider.js';

class Img extends Component { 


  handleSubmit = event =>{
    event.preventDefault();
    this.props.saveImg(this.props.url);
  }

  handleDownload = event =>{
    event.preventDefault();
        fetch(this.props.url)
        .then(response => {
          const filename =  "img";
          response.blob().then(blob => {
            let url = window.URL.createObjectURL(blob);
            let a = document.createElement('a');
            a.href = url;
            a.download = filename;
            a.click();
        });
    });
  }

  render(){
    return (
    <li className="img-wrap">
        <form onSubmit={this.handleDownload} className="form">
          <button>
            <img src={this.props.url} alt="" className="img-size"/>
          </button>
        </form>
    </li>
  );
  }
}


export default withProvider(Img);