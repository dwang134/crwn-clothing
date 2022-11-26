import React,{useState} from 'react'
import {Field} from '../../../types/Types'
import {createAuthUserFromEmailPassword} from '../../utils/firebase'

const defaultFields:Field = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
}


const Signup:React.FC = () => {

  const [fields, setFields] = useState<Field>(defaultFields);

  console.log(fields);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setFields({...fields, [name]: value});
  }

  const handleSubmit = async(event: React.SyntheticEvent) => {
    event.preventDefault();
    // const {name, email, password, confirmPassword} = event.target;
    //check if password matches current
    // if (password != confirmPassword){
    //   alert('passwords entered does not match, please make sure both passwords are the same!');
    // }else{
    //   const userDoc = await createAuthUserFromEmailPassword(email, password);
    //   console.log(userDoc);
    // }
  }

  return (
    <div>
      <h1>Sign up with your email/password</h1>
      <form onSubmit= {(e)=> handleSubmit(e)}>
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