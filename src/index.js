import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import List from './components/list';
import Detail from './components/detail'
import YTSearch from 'youtube-api-search';

// please update this with your API-key
const API_KEY = "AIzaSyDXQ1H2iW0GC1wlN5X_U55Lhv2VX3QSjc4";

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {videos: [], selectedVideo: null};
  }

  componentDidMount() {
    this.search('react.js');
  }

  search(term) {
    YTSearch({key: API_KEY, term: term}, videos => this.setState({videos: videos, selectedVideo: videos[0]}));
  }

  onVideoSelect(selectedVideo) {
    this.setState({selectedVideo})
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <SearchBar onSearchTerm={this.search.bind(this)} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <Detail video={this.state.selectedVideo} />
          </div>
          <div className=".col-md-4">
            <List
              videos={this.state.videos}
              onVideoSelect={(selectedVideo) => this.onVideoSelect(selectedVideo)}
            />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Application />,document.querySelector('.container'));
