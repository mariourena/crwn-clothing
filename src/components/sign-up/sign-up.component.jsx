import React from 'react';
import { auth, createUserProfileDoc } from '../../firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.initState();
    }

    initState = () => ({
        confirmPassword: '',
        displayName: '',
        email: '',
        password: ''
    });

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDoc(user, { displayName });
            this.setState(this.initState());
        } catch (error) {
            console.error("Issue creating a user account!", error);
        }
    }
    
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value});
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        handleChange={this.handleChange}    
                        required
                    >Display Name</FormInput>
                    <FormInput
                        type="email"
                        name="email"
                        autoComplete="email"
                        value={email}
                        handleChange={this.handleChange}    
                        required
                    >email</FormInput>
                    <FormInput
                        type="password"
                        name="password"
                        autoComplete="new-password"
                        value={password}
                        handleChange={this.handleChange}    
                        required
                    >Password</FormInput>
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        autoComplete="new-password"
                        value={confirmPassword}
                        handleChange={this.handleChange}    
                        required
                    >Confirm Password</FormInput>
                    <CustomButton type="submit">Sign Up</CustomButton>
                </form>
            </div>
        )
    }

}

export default SignUp;