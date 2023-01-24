import React from 'react'
import Logo from '../../assets/argentBankLogo.png'
import { Link } from 'react-router-dom'
import { StyledLink } from '../../utils/style/Slinks'
import styled from 'styled-components'

/**show Header
 *
 * @name Header
 * @returns {JSX}
 */

export default function Header() {
  return (
    <header className="header">
      <NavContainer>
        <Link to="/">
          <NavLogoImage src={Logo} alt="Argent Bank Logo" />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <NavContainerItem>
          <StyledLink to="/profile" className="NavContainerItem">
            <i
              className="fa fa-user-circle"
              style={{ marginRight: '0.3rem' }}
            ></i>
            Sign in
          </StyledLink>
          <StyledLink to="/login" className="NavContainerItem">
            <i className="fa fa-sign-out" style={{ marginRight: '0.3rem' }}></i>
            Sign Out
          </StyledLink>
        </NavContainerItem>
      </NavContainer>
    </header>
  )
}

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  &.a {
    font-weight: bold;
    font-size: 2rem;
    color: #2c3e50;
  }
  &:hover {
    text-decoration: underline;
  }
  @media screen and (max-width: 768px) {
    font-weight: 200;
    font-size: 0.9rem;
  }
`
const NavContainerItem = styled.h3`
  text-decoration: none;
  margin-right: 0.7rem;
  &.a {
    font-size: 2rem;
  }
  &:hover {
    text-decoration: underline;
  }
`
const NavLogoImage = styled.img`
  max-width: 100%;
  width: 200px;
`
