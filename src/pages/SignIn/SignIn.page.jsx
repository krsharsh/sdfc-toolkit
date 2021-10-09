import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import FormInput from '../../components/FormInput/FormInput.component';
import CustomButton from '../../components/CustomButton/CustomButton.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './SignIn.styles.scss';

const SignIn = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userCredentials;

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserCredentials({
      email: '',
      password: '',
    });
  };

  const handleChange = (event) => {
    console.log('Working');
    const { value, name } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
    console.log(email);
    console.log(password);
  };

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          value={email}
          handleChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value={password}
          handleChange={handleChange}
          label='Password'
        />

        <div className='buttons'>
          <CustomButton type='submit' value='Submit Form'>
            Sign In
          </CustomButton>
          <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
      <Link to='/signup' className='sign-up-direction'>
        Don't have an account SIGN UP
      </Link>
    </div>
  );
};

export default SignIn;
