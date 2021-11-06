import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className='header__container'>
            <div className='header'>
                <div className='header__leftContainer'>
                    <div className='header__leftContainer__logoContainer'>LOGO</div>
                </div>
                <div className='header__rightContainer'>
                        <span className='header__rightContainer__navItem'>About</span>
                        <span className='header__rightContainer__navItem'>What we do</span>
                        <span className='header__rightContainer__navItem'>Projects</span>
                        <span className='header__rightContainer__navItem'>Customer Stories</span>
                </div>
            </div>
        </div>
    )
}

export default Header
