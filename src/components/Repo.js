import './Repo.css';
import React, {useState,useEffect} from 'react';


function Repo({user}) {
    const [repo,setRepos]=useState({});
    const [page,setPage]=useState(1);
    const url = 'https://api.github.com/users/'+user+'/repos' ;
    
    
    useEffect(() => {
        async function fetchRepo() {
        const repos = await fetch(url);
        repos
        .json()
        .then(repos => setRepos(repos));
        
    }
        
        fetchRepo();
      },[url]);
      function inc() {
        if(page<(reposi.length+1)/6)
        setPage(page+1);
      }
      const reposi= Object.entries(repo);
    return (
    <div className='reposi'>
    
        <div className='repos'>
        {reposi.slice(((page-1)*6),(page*6)).map( rep => {
        return(
            
    <div className='repo'>
        {console.warn(rep[0])}
        <a href={rep[1].html_url}>
        <h2>{rep[1].name}</h2>
        <label style={{fontSize:"0.8rem",paddingBottom:".8rem"}}>Last Updated : <i >{rep[1].updated_at}</i></label>
        <label style={{fontSize:"1.2rem",paddingBottom:".8rem"}}>{rep[1].description}</label>
        <div className='langs'>
        <label className='lang'>{rep[1].language}</label>
        </div>
        </a>
    </div>
    
        );
        })
    }
        {console.warn (reposi.length)}
            </div>
            <div className='pagination'>
            <button className='inc' onClick={() => {if(page>1)setPage(page-1)}}>&lt; </button>
            <div className='page' > {page} </div>
            <button className='dec' onClick={inc} >&gt;</button>
            </div>
    </div>
    )
     
}
export default Repo;



/*
    {repo.slice(((page-1)*6),(page*6)).map(rep => {
            return(
        <div className='repo'>
            <h2>{rep.name}</h2>
            <label style={{fontSize:"0.8rem",paddingBottom:".8rem"}}>Last Updated : <i >{rep.updated_at}</i></label>
            <label>{rep.description}</label>
            <div className='langs'>
            <label className='lang'>{rep.language}</label>
            </div>
        </div>
            );
            })
            } 
        */
