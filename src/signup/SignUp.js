import React from 'react';
import Navbar from '../navbar/Navbar.js';
import FormField from '../formfield/FormField.js';
import CoolButton from '../coolbutton/CoolButton.js';

function SignUp(){
    return (
    <React.Fragment>
        <Navbar />
        <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
        <FormField label="Password" type="password" placeholder="Write here your password" />
        <CoolButton label="Submit" is-danger/>
    </React.Fragment>
    )

}

export default SignUp;