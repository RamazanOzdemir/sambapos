import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import '../style/navbarStyle.scss'
const NavBar = () => {
    const [navLink,setNavLink] = useState(true);

    const changeLink = (value)=>{
        setNavLink(value);
    }
    return (
        <nav className='navbar'>
            <div className='menu'>
                <div className={'menu__link '+(navLink?'active':'')} onClick={changeLink.bind(this,true)} >
                    <Link> Menü Seç</Link>
                </div>
                <div className={'menu__link '+(!navLink?'active':'')} onClick={changeLink.bind(this,false)} >
                    <Link> Masa Seç</Link>
                </div>
            </div>
            <div className='logo'>
                <img src='./images/logo.jpg' alt='LOGO'></img>
            </div>
        </nav>
    )
}

export default NavBar
