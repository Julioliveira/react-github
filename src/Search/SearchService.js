import axios from 'axios';

let githubAPI = axios.create({
    baseURL: 'https://api.github.com'
})
githubAPI.defaults.headers.common['Authorization'] = '9312326a4770d8d40e7bf6c0cb4a1cd7c4a0c0ca';

export default function getRepos(repos, callback){
    githubAPI.get('/search/repositories?q='+repos+'&per_page=10').then(response =>{
        let data = response.data.items
        var versionPromise = []
        data = data.map(repo =>{
            versionPromise.push(new Promise((resolve, reject)=>{
                githubAPI.get('/repos/'+repo.owner.login+ '/'+repo.name+'/releases/latest').then(res =>{
                    resolve(res.data.name)
                }).catch(err =>{
                    resolve('-')
                })
            }))
            return {
                name: repo.full_name,
                url: repo.html_url,
                id: repo.id,
                nodeId: repo.node_id,
                language: repo.language,
                version: '-'
            }
        })
        Promise.all(versionPromise).then(versions=>{
            versions.forEach((version, index)=>{
                data[index].version = version
            })
            callback(data)
            console.log(data)
        }).catch(err=>{
            callback(data)
            console.log(err)
        })
        
    }).catch(err =>{
        console.log(err)
    })
}

