import React from 'react'
import styled from 'styled-components'

/**show Footer
 *
 * @name Footer
 * @returns {JSX}
 */

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterTxt>Copyright 2020 Argent Bank</FooterTxt>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  border-top: 2px solid #ccc;
  padding: 2rem 0 1.5rem;
  height: 4rem;
`
const FooterTxt = styled.p`
  margin-top: 0.2rem;
`
