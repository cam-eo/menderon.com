import React from 'react'
import './WhatWeDo.css'
import hexagonRed from './hexagon_red.svg'
import hexagonPurple from './hexagon_purple.svg'
import redMoon from './moon_red.svg'
import spaceBackground from './space_background.svg'

function WhatWeDo() {
    return (
        <div className='whatWeDo__container'>
            <h1 className='whatWeDo__heading'>What We Do</h1>
            <div className='whatWeDo'>
                <img className='whatWeDo__background' src={spaceBackground} />
                <img className='whatWeDo__redMoon' src={redMoon} />
                <div className='whatWeDo__itemRowOne'>
                    <div className='whatWeDo__itemRowOne__item'>
                        <img className='whatWeDo__itemRowOne__item__background' src={hexagonRed} alt='hexagon'/>
                        <span className='whatWeDo__redText'>Full Stack</span>
                    </div>

                    <div className='whatWeDo__itemRowOne__item'>
                        <img className='whatWeDo__itemRowOne__item__background' src={hexagonPurple} alt='hexagon'/>
                        <span className='whatWeDo__purpleText'>Mechanical Engineering</span>
                    </div>
                    
                    <div className='whatWeDo__itemRowOne__item'>
                        <img className='whatWeDo__itemRowOne__item__background' src={hexagonRed} alt='hexagon'/>
                        <span className='whatWeDo__redText'>Electronic Engineering</span>
                    </div>
                </div>
                <div className='whatWeDo__itemRowTwo'>
                    <div className='whatWeDo__itemRowTwo__item'>
                        <img className='whatWeDo__itemRowTwo__item__background' src={hexagonPurple} alt='hexagon'/>
                        <span className='whatWeDo__purpleText'>Embeded</span>
                    </div>

                    <div className='whatWeDo__itemRowTwo__item'>
                        <img className='whatWeDo__itemRowTwo__item__background' src={hexagonRed} alt='hexagon'/>
                        <span  className='whatWeDo__redText'>Blockchain</span>
                    </div>
                    
                    <div className='whatWeDo__itemRowTwo__item'>
                        <img className='whatWeDo__itemRowTwo__item__background' src={hexagonPurple} alt='hexagon'/>
                        <span className='whatWeDo__purpleText'>App Dev</span>
                    </div>
                </div>
                <div className='whatWeDo__itemRowThree'>
                    <div className='whatWeDo__itemRowThree__item'>
                        <img className='whatWeDo__itemRowThree__item__background' src={hexagonRed} alt='hexagon'/>
                        <span className='whatWeDo__redText'>Product Management</span>
                    </div>

                    <div className='whatWeDo__itemRowThree__item'>
                        <img className='whatWeDo__itemRowThree__item__background' src={hexagonPurple} alt='hexagon'/>
                        <span className='whatWeDo__purpleText'>Research & Development</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo
