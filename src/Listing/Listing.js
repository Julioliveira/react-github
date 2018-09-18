import React from 'react'
import Search from '../Search/Search'
import './Listing.css'

const listing = (props) =>{
    const style ={
        width: props.showFavorite ? '50%' : '100%',
        display: 'inline-block',
        float: 'left',
        minHeight: 'calc(100vh - 100px)'
        
    }
    const changeFavorite = (favorite) =>{
        if(!props.showRemove){ ///add to favorite
            let favorites = [...props.favorites]
            favorites.push(favorite)
            props.addFavorite(favorites)
        }
        else{///remove from favorite
            props.removeFavorite(props.favorites.findIndex(f=> f.id === favorite.id), 1)
        }
    }

    let foundRepos = props.foundItems
    //////for to render repos
    const renderRepos = foundRepos.map(repo =>{
        repo.favorite = props.favorites.findIndex(f => repo.id === f.id) !== -1
        return (
            <div key={repo.node_id}  className="div-title">
                <div style={{width: '39%', display: 'inline-block', textAlign: 'left'}}>{repo.name}</div>
                <div style={{width: '29%', display: 'inline-block', textAlign: 'left'}}>{repo.language}</div>
                <div style={{width: '19%', display: 'inline-block', textAlign: 'left'}}>{repo.version}</div>
                
                <div style={{width: '9%', display: 'inline-block', textAlign: 'left'}} 
                onClick={() => changeFavorite(repo)}>
                    {
                        !repo.favorite ? 
                        <span className="link">add</span> 
                        : 
                        null
                    }
                    {
                        repo.favorite && props.showRemove ? 
                        <span className="link">remove</span>
                        : 
                        null
                    }</div>
            </div>
        )
    })


    ///component
    return (
        <div className='Listing' style={{display: 'inline'}}>
            <div style={ props.search ? style : {...style, float: 'right', backgroundColor: '#f3ecfd'}}>
                {
                    props.search ? 
                    <Search 
                        searchText={props.searchText} 
                        setFoundItems={props.setFoundItems} 
                        foundRepos={foundRepos} 
                        setSearchText={props.setSearchText}/> 
                    : 
                    null
                }
                <div style={props.search ? { marginLeft: '5%', marginRight: '5%'} : {marginLeft: '5%', marginRight: '5%', marginTop: '35px'}}>
                    <div style={{width: '39%', display: 'inline-block', textAlign: 'left'}}><strong>Name</strong></div>
                    <div style={{width: '29%', display: 'inline-block', textAlign: 'left'}}><strong>Language</strong></div>
                    <div style={{width: '19%', display: 'inline-block', textAlign: 'left'}}><strong>Latest Tag</strong></div>
                    <div style={{width: '9%', display: 'inline-block', textAlign: 'left'}}></div>
                </div>
                {renderRepos}
            </div>
             </div>
    )
}

export default listing