import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header'
import Listing from './Listing/Listing'

class App extends Component {
  state = {
    searchText: "",
    foundItems: []
  }
  setSearchTextHandler = (event)=>{
    this.setState({
      searchText: event.target.value
    })
    console.log(event.target.value)
  }

  setFoundItems = (items)=>{
    this.setState({
      foundItems: items
    })
  }
  render() {
    let one = false
    return (
      <div className="App">
        <Header title="My Github Favorites"/>
        <Listing search={true} foundItems={this.state.foundItems}  setFoundItems={this.setFoundItems} showFavorite={one} setSearchText={this.setSearchTextHandler} searchText={this.state.searchText}/>
        {one ? <Listing showFavorite={one}/> : null}
      </div>
    );
  }
}

export default App;
