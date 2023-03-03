import React, {Component} from 'react';
import ReactDOM from 'react-DOM';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';


// Create component. that produce HTML
class App extends Component {
    constructor(props){
        super(props);
        this.state = {videos: []};
        YTSearch({key:API_KEY, term: 'surf'}, (videos) => {
            this.setState({videos});
        });
    }

    render(){
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

// Take the component and put into the page
ReactDOM.render(<App />, document.querySelector('.container'));
