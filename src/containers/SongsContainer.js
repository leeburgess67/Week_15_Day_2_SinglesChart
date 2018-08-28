import React from 'react';
import SongsList from '../components/SongsList.js'

class SongsContainer extends React.Component {
  constructor(props) {
  super(props);

  this.state = {
    songs: []
  };

}
    componentDidMount() {
      const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
      fetch(url)
        .then((res) => res.json())
        .then((songs) => this.setState({ songs: songs.feed.entry }));
    }

    render() {
      return (
        <div>
          <h2>UK Top 20 Singles</h2>
          <SongsList songs={this.state.songs} />
        </div>
      )
    }



}

export default SongsContainer;
