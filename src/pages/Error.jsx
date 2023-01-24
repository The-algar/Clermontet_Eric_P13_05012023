import React from 'react'
// import './Error.css';
// import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { ErrorBtn } from '../utils/style/Slinks'
import colors from '../utils/style/colors'


/** 
 * Error Page Layout
 * Bonne année 
 * 
 * @name Error
 * @returns {JSX}
 */

function Error() {
  return (
    <ErrorWrapper>
      <Big404>404</Big404>
      <ErrorMessage>
        Whoops! The page you requested does not exist.
      </ErrorMessage>
      <ErrorBtn to="/">
          <ErrorBtnTxt >Return to the homepage</ErrorBtnTxt> 
      </ErrorBtn>
        
    </ErrorWrapper>
  )
}

export default Error

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.backgroundLight};
  align-items: center;
  margin:0!important;
  padding: 0 !important;
`
const Big404 = styled.h1`
  font-weight: 700;
  font-size: 288px;
  color: ${colors.primary};
  margin:0!important;
  padding-top: 169px !important;
    @media screen and (max-width: 768px) {
        font-size: 96px;
        padding-top: 195px;
    }
`
const ErrorMessage = styled.h2`
  font-weight: 500;
  font-size: 36px;
  color: ${colors.primary};
  padding: 5px 20px;
  margin:0!important;
    @media screen and (max-width: 768px) {
        font-size: 18px;
        padding-top: 11px;
    }
`
const ErrorBtnTxt= styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  color: ${colors.backgroundLight};
  padding-top: 0;
  margin:0!important
    &:hover {
      text-decoration: underline;
    }
  @media screen and (max-width: 768px) {
        font-size: 18px
    }
`
