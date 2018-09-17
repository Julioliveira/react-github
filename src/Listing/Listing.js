import React from 'react'
import Search from '../Search/Search'

const listing = (props) =>{
    const style ={
        width: props.showFavorite ? '50%' : '100%',
        display: 'inline-block',
        float: 'left',
        minHeight: 'calc(100vh - 100px)'
        
      }
    let foundRepos = props.foundItems
    const renderRepos = foundRepos.map(repo =>{
        return (
            <div style={{marginTop: '10px'}}>
                <div style={{width: '29%', display: 'inline-block', textAlign: 'left'}}>{repo.name}</div>
                <div style={{width: '29%', display: 'inline-block', textAlign: 'left'}}>{repo.language}</div>
                <div style={{width: '29%', display: 'inline-block', textAlign: 'left'}}>blo</div>
                <div style={{width: '9%', display: 'inline-block', textAlign: 'left'}}>add</div>
            </div>
        )
    })
    return (
        <div style={{display: 'inline'}}>
            <div style={ props.search ? style : {...style, float: 'right', backgroundColor: '#f3ecfd'}}>
                {props.search ? <Search searchText={props.searchText} setFoundItems={props.setFoundItems} foundRepos={foundRepos} setSearchText={props.setSearchText}/> : null}
                <div style={props.search ? {} : {marginTop: '35px'}}>
                    <div style={{width: '29%', display: 'inline-block', textAlign: 'left'}}>Name</div>
                    <div style={{width: '29%', display: 'inline-block', textAlign: 'left'}}>Language</div>
                    <div style={{width: '29%', display: 'inline-block', textAlign: 'left'}}>Latest Tag</div>
                    <div style={{width: '9%', display: 'inline-block', textAlign: 'left'}}></div>
                </div>
                {renderRepos}
            </div>
             </div>
    )
}

export default listing