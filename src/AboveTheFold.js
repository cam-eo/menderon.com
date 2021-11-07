import React, { useState } from 'react'
import './AboveTheFold.css'
import lostBackground from './lost_background.svg'
import lostStars1 from './lost_stars1.svg'
import lostStars2 from './lost_stars2.svg'
import lostMan from './lost_man.svg'

function AboveTheFold() {

    const [star1Style, setStar1Style] = useState({});
    const [star2Style, setStar2Style] = useState({});
    const [lostManStyle, setLostManStyle] = useState({});

    function handleMouseMove(e){
        e.preventDefault()

        const xPosition = (-window.innerWidth + ((window.innerWidth/2)+e.screenX))*0.01
        const yPosition = (-window.innerHeight + ((window.innerHeight/2)+e.screenY))*0.01

        setStar1Style({
            transform: `translate(${xPosition}px, ${yPosition}px)`,
        })

        setStar2Style({
            transform: `translate(${-xPosition*0.5}px, ${-yPosition*0.5}px)`,
        })

        setLostManStyle({
            transform: `translate(${xPosition*0.2}px, ${-yPosition*0.2}px)`,
        })
    }

    function handleMouseLeave(e){
        e.preventDefault()

        const resetStyle = {
            transform: `translate(0px, 0px)`,
            transition: `transform 400ms ease-in`
        }
        
        setStar1Style(resetStyle)
        setStar2Style(resetStyle)
        setLostManStyle(resetStyle)
    }



    return (
        <div className='aboveTheFold__container'>
            <div className='aboveTheFold' onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                <div className='aboveTheFold__leftContainer'>
                    <img className='aboveTheFold__leftContainer__splashBackground' src={lostBackground} alt='ChangingTheHumanExperience' />
                    <img className='aboveTheFold__leftContainer__stars1' src={lostStars1} alt='stars1' style={{...star1Style}} />
                    <img className='aboveTheFold__leftContainer__stars2' src={lostStars2} alt='stars2' style={{...star2Style}} />
                    <img className='aboveTheFold__leftContainer__lostMan' src={lostMan} alt='lostMan' style={{...lostManStyle}} /> 
                </div>
                <div className='aboveTheFold__rightContainer'>
                    <span className='aboveTheFold__rightContainer__headline'>Changing the Human Experience</span>
                    <span className='aboveTheFold__rightContainer__subline'>Using <strong className='aboveTheFold__rightContainer__subline__highlight'>#tech</strong></span>
                </div>
            </div>
        </div>
        
    )
}

export default AboveTheFold
