import React, {useState} from 'react'
import './WorkWithUs.css'

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


    return (
        <div className='workwithus'>
            <div className='workwithus__innerContainer'>
                <div className='workwithus__leftContainer'>
                    <h1 className='workwithus__header'>Work with us</h1>
                    <span>We love as much (or maybe a bit more) than our clients.
                        <br />Let us bring your project to life together.
                        <br />
                        <br />If you didn't notice yet, there's a buttom on the right ;)</span>
                </div>
                <div className='workwithus__rightContainer'>
                    <div className='workwithus__rightContainer__button' onClick={handleClick} style={buttonStyle}>Let's Talk ></div>
                    <form className='workwithus__rightContainer__form' style={formStyle}>
                    <label htmlFor='name'>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <label htmlFor='name'>
                        Name:
                        <input type="text" name="name" />
                    </label>
                    <label htmlFor='name'>
                        message:
                        <textarea>
                        Hello there, this is some text in a text area
                        </textarea>
                    </label>
                    <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default WorkWithUs
