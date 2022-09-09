import React from 'react';
import './sign-up.css';
import content  from '../../static/form';
import { useForm } from 'react-hook-form';
import { useResolver } from '@hookform/resolvers';
import * as  yup from 'yup';
import { Link } from 'react-router-dom';


const schema = yup.object().shape({
  name: yup.string().required().min(6),
  email: yup.string().email("Please enter a valid email"),
  password: yup.string().required("Please enter a valid password").matches(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
    "Must contain 8 characters, one uppercase, one lowercase, one number and a special character"
  )

})
export default function signUp() {

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div className='sign-up'>
      <h1>Don't have an account?</h1>
      <h3>Sign up here</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        {content.inputs.map((input,key) => {
          return (
            <div key={key}>
              <label htmlFor={input.name}>{input.label}</label>
              <br />
              <input type={input.type} name={input.name} ref={register}/>
              <br />
              <span className='message'>{errors[input.name]?.message}</span>
            </div>
          )
        })}
        <label htmlFor="options">User type</label>
        <select name="" id="options">
          <option value="Developer">Developer</option>
          <option value="Owner">Owner</option>
        </select>

        <button>SIGN UP</button>
      </form>
      <p>Have an account?<Link to="/signin">Sign In</Link></p>
      <p><Link to="/">Back to Home</Link></p>
    </div>
  )
}
