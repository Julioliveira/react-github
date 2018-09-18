import React from "react"
import './Search.css'
import getRepos from './SearchService.js' 

const enterPressedHandler = (event, props)=>{
    if(event.key === 'Enter')
    getRepos(props.searchText, props.setFoundItems)
}

const search = (props)=>{
   
    return (
        <div className="Search">
            <input type="text" 
            value={props.searchText} 
            onKeyPress={(event) => enterPressedHandler(event, props)} 
            onChange={props.setSearchText}/>

            <button type="button" 
            onClick={() => getRepos(props.searchText, props.setFoundItems)}> Search</button>
        </div>
    )
}

export default search