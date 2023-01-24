import React from 'react'
import styled from 'styled-components'
import BgImg from '../../assets/bank-tree.jpeg'

/**show banner
 *
 * @name Banner
 * @returns {JSX}
 */

export default function Banner() {
  return (
    <>
      <Hero>
        <HeroContent>
          <h2 className="sr-only">Promoted Content</h2>
          <Claim>No fees. </Claim>
          <Claim>No minimum deposit.</Claim>
          <Claim>High interest rates.</Claim>
          <Cta>Open a savings account with Argent Bank today!</Cta>
        </HeroContent>
      </Hero>
    </>
  )
}

const Hero = styled.div`
  height: 300px;
  background-image: url(${BgImg});
  background-position: 0 -50px;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  @media screen and (min-width: 920px) {
    background-position: 0% 33%;
    height: 400px;
  }
`
const HeroContent = styled.section`
  position: relative;
  top: 2rem;
  width: 200px;
  background: white;
  padding: 2rem;
  text-align: left;
  margin: 0 auto;
  @media (min-width: 920px) {
    position: absolute;
    top: 50px;
    right: 50px;
    width: 300px;
    margin: 2rem;
  }
`
const Claim = styled.p`
  font-weight: bold;
  font-size: 1rem;
  margin: 0;
  @media screen and (min-width: 920px) {
    font-size: 1.5rem;
  }
`
const Cta = styled.p`
  margin-bottom: 0;
  font-size: 0.9rem;
  @media screen and (min-width: 920px) {
    font-size: 1.2rem;
  }
`
