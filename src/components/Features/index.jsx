import React from 'react'
import styled from 'styled-components'
import iconChat from '../../assets/icon-chat.png'
import iconMoney from '../../assets/icon-money.png'
import iconSecurity from '../../assets/icon-security.png'

/**show item feature
 *
 * @name Features
 *  @param {object} props.element
 *  @param {string} props.element.img
 *  @param {string} props.element.title
 *  @param {string} props.element.text
 * @returns {JSX}
 */

export default function Features(props) {
  let variableImg
  switch (props.element.img) {
    case 'pictureChat':
      variableImg = iconChat
      break

    case 'pictureMoney':
      variableImg = iconMoney
      break

    case 'pictureSecurity':
      variableImg = iconSecurity
      break

    default:
    // do nothing but expected a default case with switch
  }

  return (
    <FeatureItems>
      <FeatureIcons src={variableImg} alt="Chat Icon" />
      <FeatureTitle>{props.element.title}</FeatureTitle>
      <p>{props.element.text}</p>
    </FeatureItems>
  )
}

const FeatureIcons = styled.img`
  width: 75px;
  border: 10px solid #00bc77;
  border-radius: 50%;
  padding: 1rem;
  @media screen and (min-width: 920px) {
    width: 100px;
  }
`
const FeatureItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 2.5rem;
`
const FeatureTitle = styled.h3`
  color: #222;
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`
