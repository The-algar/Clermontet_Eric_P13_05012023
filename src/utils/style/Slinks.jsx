import { Link, NavLink } from 'react-router-dom'
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
  margin:0!important;
  }
`
export const ErrorBtn = styled(Link)`
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
