import React from 'react';
import ReactDOM from 'react-DOM';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';



YTSearch({key:API_KEY, term: 'surf'}, function(data){
    console.log(data);
});

// Create component. that produce HTML
const App = () => {
    return (<div>
        <SearchBar />
    </div>
)}

// Take the component and put into the page
ReactDOM.render(<App />, document.querySelector('.container'));
