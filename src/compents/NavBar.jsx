import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
function NavBar() {
    const sideBar = useRef()
    const buttons = useRef()
    const closeIcon = useRef()
    const [active,setActive] = useState(0) 
    const [activeLink,setActiveLink] = useState("/")

    useEffect(()=>{
        setActiveLink(window.location.pathname)
        console.log(activeLink)
    },[])



    const handleActive = ()=>{
        active === 0 ? setActive(1) : setActive(0)
    }

    const handleSignUp = ()=> {
        const signUpContainer = document.querySelector('.sign-up-container')
        const signUp = document.getElementById('signUp')
        signUpContainer.classList.toggle('block')
        signUp.classList.toggle('flexx')
    }
    const handlelogIn = ()=> {
        const signUpContainer = document.querySelector('.sign-up-container')
        const logIn = document.getElementById('login')
        signUpContainer.classList.toggle('block')
        logIn.classList.toggle('flexx')
    }
   const handleOpenList = ()=>{
    sideBar.current.classList.toggle('flex')
    buttons.current.classList.toggle('flex')
}
    return ( 
        <>
            <nav>
                <div className="left-side">
                    <p><span className="logo">KS</span> Kemit Stream</p>
                </div>
                <div className={`mid-side ${active === 1 ? 'none' : ''} `} ref={sideBar}>
                    <div ref={closeIcon} className="close-icon" onClick={handleOpenList}>
                        <div className="line l-1"></div>
                        <div className="line l-2"></div>
                    </div>
                    <div className="buttons" ref={buttons}>
                        <button onClick={handleSignUp}  className="primary-button">Sign up</button>
                        <button onClick={handlelogIn} className="socndary-button">Login</button>
                    </div>
                    <ul>
                        <li ><Link  className={`${activeLink === "/Home"  ? "active" : ""  }`} to={'/Home'} >Home</Link></li>
                        <li ><Link  className={`${activeLink === "/MovieRealse" ? "active" : ""  }`} to={'/MovieRealse'} >Movie Realse</Link></li>
                        <li><a href="#k">Forum</a></li>
                        <li><a href="#k">About</a></li>
                    </ul>
                </div>
                <div className="right-side">
                    <input className={`${active === 1 ? 'input-active' : ''}`} type="text"  placeholder='Search ?'/>
                    
                    <i className={`fa fa-search ${active === 1 ? 'none' : ''} `} onClick={handleActive}></i>
                    <div  className="close-icon" onClick={handleActive} >
                        <div className={`line  l-1 ${active === 1 ? 'active-line' : ''} `}></div>
                        <div className={`line  l-2 ${active === 1 ? 'active-line' : ''} `}></div>
                    </div>
                    <div className={`list-icon  ${active === 1 ? 'none' : ''}`} onClick={handleOpenList}>
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line l-3"></div>
                    </div>

                    <div className="buttons" ref={buttons}>
                        <button onClick={handleSignUp}  className="primary-button">Sign up</button>
                        <button onClick={handlelogIn} className="socndary-button">Login</button>
                    </div>
                </div>
            </nav>

        </>
     );

     
}

export default NavBar;