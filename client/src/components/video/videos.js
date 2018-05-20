import React, { Component } from 'react';
import axios from 'axios';
import VideoMain from './videoMain';
import VideoList from './videoList';

class Videos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoArray: [],
      selectedVideo: null
    };

    let ROOT_URL;
    process.env.NODE_ENV === 'production' ? (ROOT_URL = 'https://performancesociety.herokuapp.com') : (ROOT_URL = 'http://localhost:3000');

    axios
      .get(`${ROOT_URL}/youtube`)
      .then(response => {
        this.setState({
          videoArray: response.data,
          selectedVideo: response.data[0]
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <VideoMain selectedVideo={this.state.selectedVideo} />
          </div>
          <div className="col-md-4 mt-2 mb-2 mt-md-5">
            <VideoList onVideoSelect={selectedVideo => this.setState({ selectedVideo })} videoArray={this.state.videoArray} />
          </div>
        </div>
      </div>
    );
  }
}

export default Videos;
