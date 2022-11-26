import React,{useState} from 'react'
import {Field} from '../../../types/Types'

const defaultFields:Field = {
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
}


const Signup:React.FC = () => {

  const [fields, setFields] = useState<Field>(defaultFields);

  console.log(fields);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setFields({...fields, [name]: value});
  }

  return (
    <div>
      <h1>Sign up with your email/password</h1>
      <form onSubmit= {(e)=> e.preventDefault()}>
        <label>Display Name</label>
        <input type= 'text' required onChange={(e)=> handleChange(e)} name="name" value={fields.name}/>
    
        <label>Email</label>
        <input type= 'email' required onChange={(e)=> handleChange(e)} name="email" value= {fields.email}/>

        <label>Password</label>
        <input type= 'password' required onChange={(e)=> handleChange(e)} name="password" value= {fields.password}/>

        <label>Confirm password</label>
        <input type= 'password' required onChange={(e)=> handleChange(e)} name= "confirmPassword" value={fields.confirmPassword}/>
        <button type= 'submit'>Sign Up</button>
      </form>
    </div>
  )
}

export default Signup