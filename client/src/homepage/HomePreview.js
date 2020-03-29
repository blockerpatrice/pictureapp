import React, { Component } from 'react';
import '../homepage/Home.css';
import {withProvider} from '../GlobalProvider.js'
import ImgList from '../unsplashcomponents/ImgList.js'

class HomePreview extends Component{
    constructor() {
		super();
		this.state = {
			imgs: []
		};
	}

	componentDidMount() {
		fetch('https://api.unsplash.com/photos/?client_id=734bbebaa77968a6b81ac40081466b1648ab43246609e5ec00aff533cd24d775')
			.then(res => res.json())
			.then(data => {
				this.setState({ imgs: data });
			})
			.catch(err => {
				console.log('Error happened during fetching!', err);
			});
	}

	render() {
		return (
			
				<div className="main-content">
					<ImgList data={this.state.imgs} />
				</div>
			
		);
	}
}
export default withProvider(HomePreview);