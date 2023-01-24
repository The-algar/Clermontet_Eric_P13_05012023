import React from 'react'
import Card from '../../components/Card'
import styled from 'styled-components'
import { EditBtn } from '../../utils/style/Slinks'
import colors from '../../utils/style/colors'
// import './Profile.css'


let tab=[
    {
        id:1,
    },
    {
        id:2,
    },
    {
        id:3,
    },                       
]

/**Export User Profile Page
 * 
 * @name UserProfile
 * @returns {JSX}
 */

export default function UserProfile() {
  return (
    <MainProfil className="toto">
      <TitleWelcome className="tata">
        <h1>Welcome back<br /> Tony Jarvis!</h1>
        <EditBtn className="edit-button">Edit Name</EditBtn>
      </TitleWelcome>
      <h2 className="sr-only">Accounts</h2>
      {tab.map((elt) => (
        <Card key={elt.id} />
      ))}
    </MainProfil>
  )
}

const StyledDarkBg = styled.div`
    min-width: 350px;
    background-color: ${colors.DarkBg};
`
const MainProfil = styled(StyledDarkBg)`
    @media (min-width: 720px) {
    height: 85vh;
    }
    @media (max-width: 720px) {
      height: 91vh;
}  
`
const StyledHeader = styled.div`
  color: #fff;
`
const TitleWelcome = styled(StyledHeader)`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    text-align: center;
    padding-top: 1rem;
    margin-bottom: 2rem;
`
