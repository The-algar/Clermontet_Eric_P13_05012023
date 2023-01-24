import React, { useEffect, useState }  from 'react';
import * as connectionActions from '../../data/connexion';
import callApi from '../../data/callApi';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components'
import { SignInBtn } from '../../utils/style/Slinks'
import colors from '../../utils/style/colors'

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
    const stateReduxToken = useSelector((state)=>state.connection.token)
    async function  getUserAxios(){
        const axios = await callApi.axiosProfile(stateReduxToken)          
        dispatch(connectionActions.getUser({firstName:axios.firstName,lastName:axios.lastName}))
    }
    
    async function submit(){
        const responseAxios = await callApi.axiosToken({email,password})
        if(responseAxios){
            dispatch(connectionActions.getToken({token:responseAxios,email:email}))
        }
    }
    
    useEffect(()=>{
        if(stateReduxToken){      
            getUserAxios()  
            history("/profile")
        }
    },[stateReduxToken])

  return ( 
    <Main className='bg'>
      <SignInContent>
        <SignInIcon className='fa fa-user-circle sign-in-icon'></SignInIcon>
        <h1>Sign In</h1>
        <form>
          <InputWrapper>
            <label htmlFor='email' style={{ weight: 'bold' }}>Email</label>
            <input type='text' id='username' onChange={(e) => setEmail(e.target.value)} style={{ padding: 5, fontSize: '1.2rem' }}/>
          </InputWrapper>
          <InputWrapper>
            <label htmlFor='password'  style={{ weight: 'bold' }}>Password</label>
            <input type='password' id='password' onChange={(e) => setPassword(e.target.value)} style={{ padding: 5, fontSize: '1.2rem' }}/>
          </InputWrapper>
          <InputRemember className='input-remember'>
            <label htmlFor='remember-me' style={{ weight: 'bold' }}>
              <input type='checkbox' id='remember-me' style={{ padding: 5, fontSize: '1.2rem' }}/>Remember me
            </label>
          </InputRemember>
          <SignInBtn type='button' onClick={() => submit()}>Sign In</SignInBtn>
        </form>
      </SignInContent>
    </Main>
  );
}

const Main = styled.main`
  background-color: ${colors.darkBg};
  min-width: 350px;
  padding-top: 2rem;
  height: 80vh;
`;

const SignInContent = styled.section`
  box-sizing: border-box;
  background-color: ${colors.backgroundLight};
  width: 300px;
  margin: 0 auto;
  padding: 2rem;
  margin-top: 1rem;
`;
const SignInIcon = styled.i`
display: flex;
justify-content: center;
font-size: 5rem;
margin: 0 auto;
`
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 1rem;
`;

const InputRemember = styled.div`
  display: flex;
`;