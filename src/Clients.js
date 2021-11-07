import React from 'react'
import './Clients.css'
import kanduaLogo from './kandua_logo.svg'
import upworkLogo from './upwork_logo.svg'
import fiverrLogo from './fiverr_logo.svg'
import boschLogo from './bosch_logo.svg'
import ktmLogo from './ktm_logo.svg'
import jemstech from './jemstech_logo.svg'

function Clients() {
    return (
        <div className='clients__container'>
            <div className='clients'>
                <h1 className='clients__header'>Our Clients</h1>
                <div className='clients__itemRow1'>
                    <div className='clients__itemRow1__item'>
                        <img src={kanduaLogo} alt='Kandua'/>
                    </div>
                    <div className='clients__itemRow1__item'>
                        <img src={upworkLogo} alt='Upwork'/>
                    </div>
                    <div className='clients__itemRow1__item'>
                        <img src={fiverrLogo} alt='Fiverr'/>
                    </div>
                </div>
                <div className='clients__itemRow2'>
                    <div className='clients__itemRow2__item'>
                        <img src={boschLogo} alt='Bosch'/>
                    </div>
                    <div className='clients__itemRow2__item'>
                        <img src={ktmLogo} alt='KTM'/>
                    </div>
                </div>
                <div className='clients__itemRow3'>
                    <div className='clients__itemRow3__item'>
                        <img src={jemstech} alt='Jemstech'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clients
