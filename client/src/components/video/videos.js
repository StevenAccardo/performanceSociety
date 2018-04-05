import React, { Component } from 'react';
import axios from 'axios';
import VideoMain from './videoMain';
import VideoList from './videoList';
import keys from '../../../../config/keys';
import '../../../styles/videoStyle.css';

class Videos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoArray: [],
      selectedVideo: null
    };
    //gets the playlist id for the playlists on the channel
    //const url = `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=UCe31VpdqJEFpvjWF1B_s2mg&key=${keys.YT_API_KEY}`;
    //other guys
    //const url = `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=UCk-kzeEguebrp89NQBmDDsg&key=${keys.YT_API_KEY}`;
    //Uses the playlist id to get the video ids from that playlist
    //const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=UUe31VpdqJEFpvjWF1B_s2mg&key=${keys.YT_API_KEY}`;
    //other guys
    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUk-kzeEguebrp89NQBmDDsg&key=${keys.YT_API_KEY}`;

    const YTResponse = axios
      .get(url)
      .then(response => {
        //console.log(response.data.items[0]);
        this.setState({
          videoArray: response.data.items,
          selectedVideo: response.data.items[0]
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="row">
        <VideoMain selectedVideo={this.state.selectedVideo} />
        <VideoList onVideoSelect={selectedVideo => this.setState({ selectedVideo })} videoArray={this.state.videoArray} />
      </div>
    );
  }
}

export default Videos;
