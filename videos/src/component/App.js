import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from '../apis/youtube';
import VideoList from './VideoList';

const KEY = "AIzaSyATxq9hZm8N-s2kd5UlWZyxu_v4pcrTifs";

class App extends Component {
  state = { videos: []};

  onTermSubmit = async (term) =>{
    const response = await youtube.get('/search', {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: 'video',
        key: KEY
      },
    });

    this.setState({ videos: response.data.items })
  };

  render() {
    return (
      <div>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
