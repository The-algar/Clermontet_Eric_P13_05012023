import React from 'react'
import Logo from '../../assets/argentBankLogo.png'
import { Link, useNavigate } from 'react-router-dom';
import { LoginFirstName } from '../../utils/style/Slinks'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import { useSelector, useDispatch } from 'react-redux';
import * as connectionActions from '../../data/connexion';

/**show Header
 *
 * @name Header
 * @returns {JSX}
 */

export default function Header() {

  const isConnected = useSelector((state)=>state.connection.isConnected)
  const firstName = useSelector((state)=>state.connection.firstName)
  const dispatch = useDispatch()
  const history = useNavigate() 

  function signOut(){
    dispatch(connectionActions.signOut())
    history("/")
  } 

  return (
    <header className="header">
      <NavContainer>
        <Link to="/">
          <NavLogoImage src={Logo} alt="Argent Bank Logo" 
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <NavContainerItem>
          {isConnected?(
            <>
          <LoginFirstName> 
            <Link className="NavContainerItem" to="/profile">
              <i className="fa fa-user-circle" style={{ marginRight: '0.3rem' }}></i>
              {firstName}
            </Link>
          </LoginFirstName>
          <StyledSignOut>
            <Link to="/" className="NavContainerItem" onClick={()=>signOut()}>
              <i className="fa fa-sign-out" style={{ marginRight: '0.3rem' }}></i>
              Sign Out
            </Link>
          </StyledSignOut>
          </>
          ):( 
          <StyledSignIn>
            <Link to="/login" className="NavContainerItem">
              <i className="fa fa-user-circle" style={{ marginRight: '0.3rem' }}></i>
              Sign In
            </Link>
          </StyledSignIn>
          )

          }
        </NavContainerItem>
      </NavContainer>
    </header>
  )
}
const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 300px;
  align-items: center;
  padding: 5px 20px;
  @media screen and (max-width: 768px) {
    font-weight: 200;
    font-size: 0.9rem;
  }
`
const NavContainerItem = styled.nav`
  text-decoration: none;
  font-weight: bold;
  margin-right: 0.7rem;
  &.a {
    font-weight: bold;
    font-size: 2rem;
    color: #2c3e50;
    text-decoration: none;
  }
  &:hover {
    text-decoration: underline;
  }
`
const StyledSignOut = styled.button`
  background-color: ${colors.backgroundLight}; 
  border: none;
  font-weight: bold;
  color: #2c3e50;
  font-size: 17px;
  margin-right: 0.3rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  } 
`

const StyledSignIn = styled.button`
  background-color: ${colors.backgroundLight}; 
  border: none;
  font-weight: bold;
  color: #2c3e50;
  font-size: 17px;
  margin-right: 0.3rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  } 
`
const NavLogoImage = styled.img`
  max-width: 100%;
  width: 200px;
`