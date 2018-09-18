import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header'
import Listing from './Listing/Listing'

class App extends Component {
  state = {
    searchText: "",
    foundItems: [],
    favorites: []
  }
  
  addFavorite = (favorite)=>{
    this.setState({
      favorites: favorite
    })
    console.log(this.state.favorites)
  }

  removeFavorite = (index)=>{
    let favs = [...this.state.favorites]
    favs.splice(index, 1)
    this.setState({
      favorites: favs
    })
    console.log(this.state.favorites)
  }

  setFoundItems = (items)=>{
    this.setState({
      foundItems: items
    })
  }

  setSearchTextHandler = (event)=>{
    this.setState({
      searchText: event.target.value
    })
    if(event.target.value === ""){
      this.setState({
        foundItems: []
      })
    }
  }




  //render app component
  render() {
    return (
      <div className="App">
        <Header title="My Github Favorites"/>
        <Listing 
          search={true} 
          favorites={this.state.favorites} 
          addFavorite={this.addFavorite} 
          foundItems={this.state.foundItems}  
          setFoundItems={this.setFoundItems} 
          showFavorite={this.state.favorites.length  > 1} 
          setSearchText={this.setSearchTextHandler} 
          searchText={this.state.searchText}
        />

        { //only load favorites listing if it's greater than 1
          this.state.favorites.length > 1 ? 
            <Listing 
              showFavorite={this.state.favorites.length  > 1} 
              favorites={this.state.favorites} 
              foundItems={this.state.favorites} 
              showRemove={true} 
              removeFavorite={this.removeFavorite}
            /> 
          : 
          null
        }
      </div>
    );
  }
}

export default App;
