import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import colors from './colors'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`
export const Loader = styled.div`
  padding: 10px;
  border: 6px solid ${colors.primary};
  border-bottom-color: transparent;
  border-radius: 22px;
  animation: ${rotate} 1s infinite linear;
  height: 0;
  width: 0;
`

export const StyledLink = styled(NavLink)`
  padding: 0 8px;
  text-decoration: none;
  font-size: 1rem;
  text-align: center;
  margin-right: 0.3rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`
export const ErrorBtn = styled.button`
  display: block;
  width: 100%;
  margin: 0 auto;
  text-decoration: none;
  text-align: center;
  width: 15rem;
  padding: 15px;
  margin-top: 1rem;
  border-color: ${colors.errorBtn};
  background-color: ${colors.errorBtn};
  border-width: 2px;
  border-style: outset;
  color: #fff;
`
export const TransactionBtn = styled.button`
  display: block;
  text-align: center;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: ${colors.errorBtn};
  background-color: ${colors.errorBtn};
  border-width: 2px;
  border-style: outset;
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  @media (min-width: 720px) {
      width: 200px;
    }
`

export const EditBtn = styled.button`
  display: block;
  text-align: center;
  width: 100%;
  padding: 10px;
  margin-top: 1rem;
  border-color: ${colors.errorBtn};
  background-color: ${colors.errorBtn};
  border-width: 2px;
  border-style: outset;
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    font-weight: bold;
  }
`
export const SignInBtn = styled.button`
  display: block;
  text-align: center;
  width: 13.75rem;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: ${colors.errorBtn};
  background-color: ${colors.errorBtn};
  color: #fff;
  margin-right: 0.3rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`
export const LoginFirstName = styled.button`
  background-color: ${colors.backgroundLight}; 
  border: none;
  font-weight: bold;
  color: #2c3e50;
  font-size: 17px; 
  margin-right: 0.3rem;
  text-decoration: none;
  // &:hover {
  //   text-decoration: underline;
  // }
`
export const SaveBtn = styled.button`
  display: block;
  text-align: center;
  width: 10rem;
  padding: 10px;
  margin-top: 1rem;
  border-color: ${colors.errorBtn};
  background-color: ${colors.errorBtn};
  border-width: 2px;
  border-style: outset;
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    font-weight: bold;
  }
`