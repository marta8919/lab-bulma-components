import React from 'react'
import CoolButton from '../coolbutton/CoolButton.js'

function Navbar (){
    return (
        <React.Fragment>
            <nav className="navbar is-transparent">
                <div className="navbar-brand">
                    <a className="navbar-item" href="https://bulma.io">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"></img>
                    </a>

                    <div class="navbar-burger" data-target="navbarExampleTransparentExample">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div id="navbarExampleTransparentExample" className="navbar-menu">
                        <div className="navbar-start">
                        <a className="navbar-item">
                            Home
                        </a>
                        </div>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="field is-grouped">
                                <p className="control">
                                    <CoolButton isDanger>Sign in</CoolButton>
                                </p>
                                <p className="contol">
                                    <CoolButton isSmall isSuccess>Sign up</CoolButton>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </React.Fragment>  
    )
}

export default Navbar


