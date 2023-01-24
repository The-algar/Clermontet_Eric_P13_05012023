import React from 'react'
import styled from 'styled-components'
import Banner from '../../components/Banner'
import Features from '../../components/Features'

const informationFeature = [
  {
    id: 1,
    img: 'pictureChat',
    title: 'You are our #1 priority',
    text: 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
  },
  {
    id: 2,
    img: 'pictureMoney',
    title: 'More savings means higher rates',
    text: 'The more you save with us, the higher your interest rate will be!',
  },

  {
    id: 3,
    img: 'pictureSecurity',
    title: 'Security you can trust',
    text: 'We use top of the line encryption to make sure your data and money is always safe.',
  },
]
/**show Home Page
 *
 * @name Home
 * @returns {JSX}
 */

export default function Home() {
  return (
    <>
      <main>
        <Banner />
        <FeatureWrapper>
          <h2 className="sr-only">Features</h2>
          {informationFeature.map((elt) => (
            <Features element={elt} key={elt.id} />
          ))}
        </FeatureWrapper>
      </main>
    </>
  )
}

const FeatureWrapper = styled.section`
  display: flex;
  flex-direction: column;
  @media (min-width: 920px) {
    flex-direction: row;
  }
`
