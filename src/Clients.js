import React from 'react'
import './Clients.css'
import kanduaLogo from './kandua_logo.svg'
import upworkLogo from './upwork_logo.svg'
import fiverrLogo from './fiverr_logo.svg'

function Clients() {
    return (
        <div className='clients__container'>
            <div className='clients'>
                <h1 className='clients__header'>Our Clients</h1>
                <div className='clients__itemRow1'>
                    <div className='clients__itemRow1__item'>
                        <img src={kanduaLogo} />
                    </div>
                    <div className='clients__itemRow1__item'>
                        <img src={upworkLogo} />
                    </div>
                    <div className='clients__itemRow1__item'>
                        <img src={fiverrLogo} />
                    </div>
                </div>
                <div className='clients__itemRow2'>
                    <div className='clients__itemRow2__item'>
                        Client
                    </div>
                    <div className='clients__itemRow2__item'>
                        Client
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clients
