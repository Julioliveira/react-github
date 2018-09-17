import React from "react"
import './Search.css'
import axios from 'axios';

let githubAPI = axios.create({
    baseURL: 'https://api.github.com'
})
githubAPI.defaults.headers.common['Authorization'] = '641d5a3cdcb59720f8c4c88c227f69acf2873366';

const getRepos = (repos, callback) =>{
    githubAPI.get('/search/repositories?q='+repos).then(response =>{
        let data = response.data.items.splice(0, 10)
        data = data.map(repo =>{
            return {
                name: repo.full_name,
                url: repo.html_url,
                id: repo.id,
                language: repo.language
            }
        })
        callback(data)
        console.log(data)
    }).catch(err =>{
        console.log(err)
    })
}

const search = (props)=>{
    return (
        <div className="Search">
            <input type="text" value={props.searchText} onChange={props.setSearchText} ></input>
            <button type="button" onClick={() => getRepos(props.searchText, props.setFoundItems)}> Search</button>
        </div>
    )
}

export default search