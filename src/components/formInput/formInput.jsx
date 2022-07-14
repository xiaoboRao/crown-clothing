import React from 'react'
import './formInput.scss'
const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange}   {...otherProps}></input>
     <label className={`${otherProps.value ? 'shrink' : ''} form-input-label` }>{label}</label>
    </div>
  )
}
export default FormInput
