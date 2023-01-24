import React from 'react'
import styled from 'styled-components'
import { SignInBtn } from '../../utils/style/Slinks'
import colors from '../../utils/style/colors'

/**Export Sign-in Modal
 * 
 * @name SignIn
 * @returns {JSX}
 */

export default function SignIn(){

  return ( 
    <>   
        <Main>
            <SignInContent>
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form>
                    <InputWrapper>
                        <InputWrapperLabel htmlFor="email">Email</InputWrapperLabel>
                        <InputWrapperInput type="text" id="username" />
                    </InputWrapper>
                    <InputWrapper>
                        <InputWrapperLabel htmlFor="password">Password</InputWrapperLabel>
                        <InputWrapperInput type="password" id="password" />
                    </InputWrapper>
                    <InputRemember>
                        <InputRememberLabel htmlFor="remember-me" >
                            <input type="checkbox" id="remember-me" />Remember me
                        </InputRememberLabel>
                    </InputRemember>
                    <SignInBtn to="/profile">Sign In</SignInBtn>
                </form>
            </SignInContent>
        </Main>
    </>
  )   

}

const DarkBg = styled.div`
  background-color: ${colors.DarkBg};
`

const Bg = styled(DarkBg)`
  height: 80vh;
`

const Space = styled(Bg)`
  padding-top: 2rem;
`

const Main = styled(Space)`
  height: 80vh;

  @media (max-width: 720px) {
    height: 83vh;
  }
`
const SignInContent = styled.div`
  box-sizing: border-box;
  text-align: center;
  background-color: ${colors.backgroundLight};
  width: 300px;
  margin: 0 auto;
  padding: 2rem;
  margin-top: 1rem;
`

const InputRemember = styled.div`
  display: flex;
`

const InputRememberLabel = styled.label`
  margin-left: 0.25rem;
`

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 1rem;
`

const InputWrapperLabel = styled.label`
  font-weight: bold;
`

const InputWrapperInput = styled.input`
  padding: 5px;
  font-size: 1.2rem;
`