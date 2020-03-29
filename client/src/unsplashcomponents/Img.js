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
      <img src={this.props.url} alt=""/>
        <form onSubmit={this.handleDownload} >
          <button className="download-btn" type="submit">Download</button>
        </form>
        {/* <form onSubmit={this.handleSubmit}>
          <input type="submit" className="save-btn" value="♡ Save"/>
        </form> */}
    </li>
  );
  }
}


export default withProvider(Img);