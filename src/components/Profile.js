
import './Profile.css';
import React, {useState,useEffect} from 'react';
//import profile from '../images/fyle.png';
//import Header from './Header';

function Profile({user}) {
    const [data,setdata] = useState({})
    let url = 'https://api.github.com/users/'+user;
    //let urle = 'https://api.github.com/users/defunkt';
    async function fetchProfile() {
        const res = await fetch(url);
        res
          .json()
          .then(res => setdata(res));
          
      }
      useEffect(() => {
        fetchProfile();
      },[url]);
    
    return (
    <div className='profile'>
    
        {console.warn(data)}
  
        
        <div className='profileim'>
            <a href={data.html_url}><img src={data.avatar_url} alt="Profile" className="profileimg" style={{cursor:"pointer"}}/></a>
            <div><a href={data.html_url}>{data.html_url}</a></div>
            
        </div>
        
        <div className='profiledetail'>
            
            <label className='name' style={{fontWeight:"normal",fontSize:"2rem"}}><a href={data.html_url}>{data.login}</a></label>
            <label style={{fontSize:"0.8rem",paddingBottom:".8rem"}}>Last Updated : <i >{data.updated_at}</i></label>
            <label className='bio'>{data.bio}</label>
            <label>Total repo : {data.public_repos}</label>
            <label className='location'>Location : {data.location}</label>
            <label className='twitter'>Twitter : {data.twitter}</label>
            
        </div>
    </div>
    )
}
export default Profile;
