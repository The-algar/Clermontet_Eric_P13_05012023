import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { axiosPutUser } from '../../data/callApi'
import * as connectionActions from '../../data/connexion'
import transactionsData from "../../data/transactions"
import Card from '../../components/Card'
import styled from 'styled-components'
import { EditBtn } from '../../utils/style/Slinks'
import colors from '../../utils/style/colors'

/**Export User Profile Page
 * 
 * @name UserProfile
 * @returns {JSX}
 */

export default function UserProfile() {

    const stateReduxFirstName = useSelector((state) => state.connection.firstName)
    const stateReduxLastName = useSelector((state) => state.connection.lastName)
    const stateReduxToken = useSelector((state) => state.connection.token)
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [displayEditName, setdisplayEditName] = useState(false)
    const dispatch = useDispatch()

    function displayFormEdit() {

      setdisplayEditName(!displayEditName)
    }
      async function editUser() {
      const axios = await axiosPutUser(stateReduxToken, { firstName, lastName })
      dispatch(connectionActions.getUser({ firstName: axios.firstName, lastName: axios.lastName }))
      setdisplayEditName(!displayEditName)
    }

    if (stateReduxToken) {
    return (
      <>
        <MainProfil>
          <TitleWelcome>
              {
                displayEditName ? (
                  <>
                    <h1>Welcome back</h1>
                      <form >
                        <FormFirstLine className='form-first-line'>
                            <label htmlFor="firstName">
                                <InputNew type="text" className="input-new" id="firstName" placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} />
                            </label>

                            <label htmlFor="lastName">
                                <InputNew type="text" id="lastName" className='input-new' placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} />
                            </label>
                        </FormFirstLine>
                        <FormSecondLine className='form-second-line'>
                          <button type='button' className='button-edit' onClick={() => editUser()}>
                              Save
                          </button>
                          <button type='button' className='button-edit' onClick={() => displayFormEdit()}>
                              Cancel
                          </button>
                        </FormSecondLine>
                      </form>
                  </>
              ) : (
                  <>
                    <h1>Welcome back<br />{stateReduxFirstName + " " + stateReduxLastName} !</h1>
                    <EditBtn onClick={() => displayFormEdit()}>Edit Name</EditBtn>
                  </>
                  )
              }
          </TitleWelcome>
              <h2 className="sr-only">Accounts</h2>
              {transactionsData.map((transaction) => {
              return <Card transaction={transaction} key={transaction._id} />;
            })}
        </MainProfil>
      </>
    )
  }
}

const StyledDarkBg = styled.div`
  background-color: ${colors.darkBg};
`
const MainProfil = styled(StyledDarkBg)`
  min-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  text-align: center;
    @media (min-width: 720px) {
    height: 85vh;
    }
    @media (max-width: 720px) {
      height: 100vh;
    }  
`
const StyledHeader = styled.div`
  color: ${colors.backgroundLight};
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  text-align: center;
  font-size: 1em;
  font-weight: bold;
`
const TitleWelcome = styled(StyledHeader)`
  padding-top: 1rem;
  margin-bottom: 2rem;
`
const InputNew = styled.input`
    width: 10rem;
    height: 2rem;
    margin: 0.5rem;
`
const FormSecondLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-width: 350px;
  align-items: center;
  align-content: center;
  text-align: center;
  gap: 1rem;
  @media (max-width: 384px) {
    flex-direction: column;
    gap: 0;
    } 
  & button {
  width: 5rem;
  height: 2rem;
  margin: 0.5rem;
  color: ${colors.backgroundLight};
  background-color: ${colors.transactionBtn};
  }
`
const FormFirstLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-width: 350px;
  align-items: center;
  align-content: center;
  text-align: center;
  gap: 1rem;
  @media (max-width: 384px) {
    flex-direction: column;
    gap: 0;
    } 
`