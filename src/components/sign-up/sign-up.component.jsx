import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart } from '../../redux/user/user.actions';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './sign-up.styles.scss';

class SignUp extends Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { signUpStart } = this.props;
        const { displayName, email, password, confirmPassword } = this.state;

        if (confirmPassword !== password) {
            alert("Password don't Match");
            return;
        }

        signUpStart({ displayName, email, password });
    };

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({[name]: value});
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'>I do no have an account</h2>
                <span>Sing up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput 
                      type='text' 
                      name='displayName' 
                      value={displayName}
                      onChange={this.handleChange}
                      label='Display Name'
                      required 
                    />

                    <FormInput 
                      type='email' 
                      name='email' 
                      value={email}
                      onChange={this.handleChange}
                      label='Email'
                      required 
                    />

                    <FormInput 
                      type='password' 
                      name='password' 
                      value={password}
                      onChange={this.handleChange}
                      label='Password'
                      required 
                    />

                    <FormInput 
                      type='password' 
                      name='confirmPassword' 
                      value={confirmPassword}
                      onChange={this.handleChange}
                      label='Confirm Password'
                      required 
                    />

                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);