import React, { useEffect, useState }  from 'react';
import * as connectionActions from '../../data/connexion';
import { axiosToken, axiosProfile } from '../../data/callApi';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import { SignInBtn } from '../../utils/style/Slinks'
// import colors from '../../utils/style/colors'

/**Export Sign-in Modal
 * 
 * @name SignIn
 * @returns {JSX}
 */

export default function SignIn(){

  const dispatch = useDispatch()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const history = useNavigate()
  const stateReduxToken = useSelector((state) => state.connection.token)

  async function  getUserAxios(){
      const axios = await axiosProfile(stateReduxToken)         
      dispatch(connectionActions?.getUser({firstName:axios.firstName, lastName:axios.lastName}))
      console.log(axios.firstName, axios.lastName);
  }
  
  async function submit(){

      console.log({email,password})

      const responseAxios = await axiosToken({email,password})
      // console.log('Axios return:', responseAxios);

      if(responseAxios){
          dispatch(connectionActions.getToken({token:responseAxios,email:email}))
      }
  }
  
  useEffect(()=>{
      if(stateReduxToken){      
          getUserAxios()  
          history("/profile")
      }

  })

  return ( 
    <Main className='bg'>
      <SignInContent>
        <i className='fa fa-user-circle sign-in-icon'></i>
        <h1>Sign In</h1>
        <form>
          <InputWrapper>
            <Label htmlFor='email'>Email</Label>
            <Input type='text' id='username' onChange={(e) => setEmail(e.target.value)} />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor='password'>Password</Label>
            <Input type='password' id='password' onChange={(e) => setPassword(e.target.value)} />
          </InputWrapper>
          <InputRemember className='input-remember'>
            <Label htmlFor='remember-me'>
              <Input type='checkbox' id='remember-me' />Remember me
            </Label>
          </InputRemember>
          <SignInBtn type='button' onClick={() => submit()}>Sign In</SignInBtn>
        </form>
      </SignInContent>
    </Main>
  );
}

const Main = styled.main`
  background-color: #12002b;
  padding-top: 2rem;
  height: 80vh;
`;

const SignInContent = styled.section`
  box-sizing: border-box;
  background-color: white;
  width: 300px;
  margin: 0 auto;
  padding: 2rem;
  margin-top: 1rem;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 5px;
  font-size: 1.2rem;
`;

const InputRemember = styled.div`
  display: flex;
`;