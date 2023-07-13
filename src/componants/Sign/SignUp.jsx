import React from 'react';
import { useState } from 'react';
import { useGetUserQuery, useSignInMutation, useSignupMutation } from '../../services/SignApi';
import { useEffect } from 'react';
import jwtDecode from 'jwt-decode';


const SignUp = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
  const [first, setfirst] = useState("");
  const [last, setlast] = useState("");

    const [Signup , { isLoading, isError }] = useSignupMutation();
    const [SignIn ] = useSignInMutation();


    let decodedToken;
    const token = sessionStorage.getItem('token')

    if (token) {
      decodedToken = jwtDecode(token);
    }

    

    const handleSignUp = async () => {

      const result = await Signup({ username, password });
      if (result.error) {
        console.log('Sign up failed:', result.error);
      } else {
        console.log('Sign up successful:', result.data);
      }


    };
    
    const handleSignin = async () => {
      try {
        const { data } = await SignIn({ username, password });
        console.log('Signin successful!');
        sessionStorage.setItem('token', data.token); // Save the token in session storage
      console.log(data.token);
      
      } catch (error) {
        console.error('Signin failed:', error);
      }
    };




    const handleSignIn = async () => {
      // Make the sign-in request and handle the response
      try {
        const response = await fetch('/signin', {
          method: 'POST',
          // Include the necessary request payload
          body: JSON.stringify({ username, password }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        const data = await response.json();
  
        // Check if the response contains a token
        if (data.token) {
        } else {
          console.error('Sign-in failed:', data.message);
        }
      } catch (error) {
        console.error('Error during sign-in:', error);
      }
    };










    

    // const handleUpdateProfile = async () => {
    //   try {
    //     const updatedProfile = {
    //       username: decodedToken.username,
    //       firstName: first,
    //       lastName: last,
    //     };
    
    //     await updateProfile(updatedProfile);
    //     console.log('Profile updated:', updatedProfile);


    // // Update the user data in the component state
    //     setfirst(updatedProfile.firstName);
    //     setlast(updatedProfile.lastName);

    //   } catch (error) {
    //     console.error('Error updating profile:', error);
    //   }
    // };


    return (
<div style={{display : "flex" , justifyContent : "center"  , alignItems : "center" , height : "500px"}}>

        <div>
          <h1>User Data</h1>
          <h1>Username: {decodedToken?.username}</h1>
          <h1>password: {decodedToken?.password}</h1>
          <h1>first: {first}</h1>
          <h1>last: {last}</h1>

          {/* Display other user data as needed */}
        </div>



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
            <button onClick={  () => {
              handleSignin()
              
            }  }>Sign In</button>




<button onClick={  () => {
              console.log(decodedToken.username)

            }  }>Check</button>

            {message && <p>{message}</p>}
          </div>
</div>
    );
}

export default SignUp;







