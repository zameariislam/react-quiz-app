import React from 'react';
import Button from '../components/Button';
import CheckBox from '../components/CheckBox';
import Form from '../components/Form';
import Illustration from '../components/Illustration';
import TextInput from '../components/TextInput';
import classes from '../css/SignUp.module.css'

const SignUp = () => {
    return (
        <>
            <h1>Login to your account</h1>
            <div className="column">
                <Illustration />
                <Form className={`${classes.signup}`}>
                    <TextInput type='text' placeholder='Enter  name' icon='person' />
                    <TextInput type='text' placeholder='Enter email' icon='alternate_email' />
                    <TextInput type='password' placeholder='Enter password' icon='lock' />
                    <TextInput type='password' placeholder='Confirm password' icon='lock' />
                    <CheckBox text='I agree to the Terms &amp; Conditions' />
                    <Button>
                        Submit now
                    </Button>
                    <div className="info">
                        Already have an account? <a href="login.html">Login</a> instead.
                    </div>

                </Form>


            </div>

        </>
    );
};

export default SignUp;