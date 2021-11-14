import React, {useState} from 'react'
import './WorkWithUs.css'
import Close from '@mui/icons-material/Close';

function WorkWithUs() {

    const [buttonStyle, setButtonStyle] = useState({})
    const [formStyle, setFormStyle] = useState({})

    function handleClick(e){
        e.preventDefault()

        setButtonStyle({
            display: 'none'
        })

        setFormStyle({
            display: 'flex'
        })
    }

    function handleClose(e){
        e.preventDefault()

        setButtonStyle({
            display: 'flex'
        })

        setFormStyle({
            display: 'none'
        })
    }

    return (
        <div className='workwithus'>
            <div className='workwithus__innerContainer'>
                <div className='workwithus__leftContainer'>
                    <h1 className='workwithus__header'>Work with us</h1>
                    <div className='workwithus__message'>
                        <span className='workwithus__message__nowrap'>We love </span>
                            <span className='workwithus__message__highlight'>#tech</span>
                            <span className='workwithus__message__nowrap'>as much (or maybe a bit more) than our clients.</span>
                    </div>
                    <div className='workwithus__message'>
                        <span>
                            <br />
                            <br />
                            Let us bring your project to life together. If you didn't notice yet, there's a buttom on the right ;)
                        </span>
                    </div>
                </div>
                <div className='workwithus__rightContainer'>
                    <div className='workwithus__rightContainer__button' onClick={handleClick} style={buttonStyle}>Let's Talk ></div>
                    <form className='workwithus__rightContainer__form' style={formStyle}>
                    <div className='workwithus__rightContainer__form__closeContainer'>
                        <div onClick={handleClose} className='workwithus__rightContainer__form__closeContainer__close'>
                            <Close />
                        </div>
                    </div>
                    <label className='workwithus__rightContainer__form__label' htmlFor='name'>
                        Name
                        <input className='workwithus__rightContainer__form__input' type="text" name="name" />
                    </label>
                    <label className='workwithus__rightContainer__form__label' htmlFor='email'>
                        Email
                        <input className='workwithus__rightContainer__form__input' type="email" name="email" />
                    </label>
                    <label className='workwithus__rightContainer__form__label' htmlFor='name'>
                        Message
                        <textarea className='workwithus__rightContainer__form__message' placeholder='Type message here'>
                        </textarea>
                    </label>
                    <input className='workwithus__rightContainer__form__button' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default WorkWithUs
