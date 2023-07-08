import React from 'react';
import { useState } from 'react';
import { useSignInMutation, useSignupMutation } from '../../services/SignApi';

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const [Signup , { isLoading, isError }] = useSignupMutation();
    const [SignIn ] = useSignInMutation();

    const handleSignUp = async () => {

      const result = await Signup({ username, password });
      if (result.error) {
        console.log('Sign up failed:', result.error);
      } else {
        console.log('Sign up successful:', result.data);
      }


    };
    
    const handleSignIn = async () => {

      const result = await SignIn({ username, password });
      if (result.error) {
        console.log('Sign in failed:', result.error);
      } else {
        console.log('Sign in successful:', result.data);
      }

    };




    return (
<div style={{display : "flex" , justifyContent : "center"  , alignItems : "center" , height : "500px"}}>
            <div style={{width : "40%" , border : "2px solid yellow"}}>
            <h1>Sign Up</h1>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <button onClick={handleSignUp}>Sign Up</button>
      
            <h1>Sign In</h1>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <button onClick={handleSignIn}>Sign In</button>
      
            {message && <p>{message}</p>}
          </div>
</div>
    );
}

export default SignUp;
