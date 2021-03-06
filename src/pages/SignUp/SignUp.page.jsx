import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import FormInput from '../../components/FormInput/FormInput.component';
import CustomButton from '../../components/CustomButton/CustomButton.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './SignUp.styles.scss';

const SignUp = () => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });
  let history = useHistory();

  const { displayName, email, phoneNumber, password, confirmPassword } =
    userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }
    if (password.length < 6) {
      alert('Password lenght is not sufficent, write atleast 6 characters');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName, phoneNumber });
      await setUserCredentials({
        displayName: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
      });
      history.push('/signin');
    } catch (err) {
      console.log('Error creating new user in signup' + err.message);
    }
    console.log(userCredentials);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have an account</h2>
      <span>Sign Up using your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='Display Name*'
          required
        ></FormInput>
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='Email*'
          required
        ></FormInput>
        <FormInput
          type='number'
          name='phoneNumber'
          value={phoneNumber}
          onChange={handleChange}
          label='Phone'
        ></FormInput>
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='Password*'
          required
        ></FormInput>
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirm Password*'
          required
        ></FormInput>
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
      <Link to='/signin' className='sign-in-direction'>
        Already Have An Account? SIGN IN
      </Link>
    </div>
  );
};
export default SignUp;
