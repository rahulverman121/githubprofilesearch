import './Header.css';
import logo from '../images/git.jpg';
import srch from '../images/srchicon.png';
import {useState} from 'react';
import Profile from './Profile';
import Repo from './Repo';
import Footer from './Footer';


function Header() {
    var [username,setuser]=useState("defunkt");
    var [usera,setusera]=useState("");
    return (
        <>
        <div className='header'>
            <img src={logo} alt="logo" className='logo'/>
            <input type="search" placeholder="Search.." onChange={ (e) => setusera(e.target.value)} className="search"/>
            <img src={srch} className='searchicon' onClick={ () => setuser(usera)}/>
            
        </div>
        <Profile user={username} />
        <Repo user={username} />
        <Footer />
        
</>

    );
}

        
export default Header;