import React, { useState } from 'react'
import FormInput from '../formInput/formInput'
import CustomButton from '../customButtom/customButtom'
import "./signIn.scss"
const SignIn = () => {
  const [state, setState] = useState({ email: '', password: '' })
  const hanleSubmit = (event) => {
    event.preventDefault()
    setState({ email: '', password: '' })
  }
  const handleChange = (event) => {
    console.log('event', event.target);
    const {name, value} = event.target
    setState({[name]: value})
  }

  return (
    <div className="sign-in">
      <h2>i already have an account </h2>
      <span>sign in with your email and password</span>

      <form onSubmit={hanleSubmit}>
        <FormInput  handleChange={ handleChange } name='email' type='email' label="Email" value={state.email} required></FormInput>
        <FormInput  handleChange={ handleChange } name='password' type='password' label="Password" value={state.password} required></FormInput>
        <CustomButton type='submit'> Sign In</CustomButton>
      </form>
    </div>
  )
}

export default SignIn
