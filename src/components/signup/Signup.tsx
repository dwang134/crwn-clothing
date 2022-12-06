import React,{useState} from 'react'
import {Field} from '../../../types/Types'
import {createAuthUserFromEmailPassword, createUserDocumentFromAuth} from '../../utils/firebase'
import Button from '../button/Button'
import FormInput from '../input/FormInput'

const defaultFields:Field = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}


const Signup:React.FC = () => {

  const [fields, setFields] = useState<Field>(defaultFields);

  //doing it this way allows you to not create a state for each target values
  const {displayName, email, password, confirmPassword} = fields;

    const resetFormFields = () => {
      setFields(defaultFields);
    }

    const handleSubmit = async(event: React.SyntheticEvent) => {
      event.preventDefault();
      // const {name, value, password, confirmPassword} = event.target;
      // check if password matches current
      if (password !== confirmPassword){
        alert('passwords entered does not match, please make sure both passwords are the same!');
        return;
      }
        //create user doc
        try{
          const res = await createAuthUserFromEmailPassword(email, password);
          if (res){
            await createUserDocumentFromAuth(res.user, {displayName});
          }
          resetFormFields();
        }catch(err: any){
          if (err.code === 'auth/email-already-in-use'){
            alert('email already in use')
          }
          console.log('user creation countered error:', err);
        }

    }


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setFields({...fields, [name]: value});
  }


  return (
    <div>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit= {(e)=> handleSubmit(e)}>
      <FormInput
          label='Display Name'
          type='text'
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />

        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />

        <FormInput
          label='Confirm Password'
          type='password'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />
        <Button type='submit'>Sign Up</Button>
      </form>
    </div>
  )
}

export default Signup