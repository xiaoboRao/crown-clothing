import React, { useState } from 'react'
import { connect } from 'react-redux'
import FormInput from '../formInput/formInput'
import CustomButton from '../customButtom/customButtom'
import { signUpStart } from '../../redux/user/userAction'
import './signUp.scss'

const SignUp = ({signUpStart}) => {
  
  const [state, setState] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleSubmit = async (event) => {
    event.preventDefault()
    const { password, confirmPassword } = state
    if (password !== confirmPassword) {
      alert("passwords don't match")
      return
    }
    signUpStart(state)
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setState({ ...state, [name]: value })
  }

  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={state.displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput type="email" name="email" value={state.email} onChange={handleChange} label="Email" required />
        <FormInput
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={state.confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  )
}

const mapDispatchToProps = (dispatch) =>({
  signUpStart: (user) => dispatch(signUpStart(user))
})

export default connect(null, mapDispatchToProps)(SignUp)
