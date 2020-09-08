import React from 'react';
import { connect } from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'; 
import './sign-in.styles.scss';

class SignIn extends React.Component{
    constructor(props) {
        super(props);

        this.state={
            email:'',
            password:''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { emailSignInStart } = this.props;
        const {email, password} = this.state;

        emailSignInStart(email, password);

    //     try {
    //         await auth.signInWithEmailAndPassword(email, password);
    //         this.state ({email:'', password:''});
    //     } catch (error) {
    //         console.log(error);
    //     }

    //     this.setState({ email:'', password:'' })
    // }
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({[name]: value})
    }

    render() {
        const { googleSignInStart } = this.props;
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign In with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" value={this.state.email} handleChange={this.handleChange} label="Email" type="email" required />
                    <FormInput name="password" value={this.state.password} handleChange={this.handleChange} label="Password" type="password" required />
                    <div className='buttons'>
                       <CustomButton type="submit">Sign In</CustomButton> 
                       <CustomButton type="button" className='btn btn-outline-primary btn-lg' onClick={googleSignInStart} isGoogleSignIn>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);