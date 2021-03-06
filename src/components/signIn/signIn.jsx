import React, { useState } from 'react'
import FormInput from '../formInput/formInput'
import { signInWithGoogle, signInWithEmailAndpwd } from '../../firebase/firebase.utils'
import CustomButton from '../customButtom/customButtom'
import './signIn.scss'
const SignIn = () => {
  const [state, setState] = useState({ email: '', password: '' })
  const hanleSubmit = (event) => {
    event.preventDefault()
    signInWithEmailAndpwd(state.email, state.password)
    // empty the email and password input
    setState({ email: '', password: '' })
  }
  const handleChange = (event) => {
    const { name, value } = event.target

    // when change email or password, just overwrite the property value
    setState({ ...state, [name]: value })
  }

  return (
    <div className="sign-in">
      <h2>i already have an account </h2>
      <span>sign in with your email and password</span>

      <form onSubmit={hanleSubmit}>
        <FormInput
          handleChange={handleChange}
          name="email"
          type="email"
          label="Email"
          value={state.email}
          required
        ></FormInput>
        <FormInput
          handleChange={handleChange}
          name="password"
          type="password"
          label="Password"
          value={state.password}
          required
        ></FormInput>

        <div className="buttons">
          <CustomButton type="submit"> Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  )
}

export default SignIn
