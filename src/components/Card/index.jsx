import React from 'react'
import styled from 'styled-components'
import { TransactionBtn } from '../../utils/style/Slinks'
import PropTypes from 'prop-types'

/**show card 
 *  
 * @returns {JSX}
 */

 const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
   })

 export default function Card({ transaction }){

  return ( 
        <Account>
            <AccountContentWrapper>
                <AccountTitle>Argent Bank Savings {transaction.type}</AccountTitle>
                <AccountAmount>{formatter.format(transaction.amount)}</AccountAmount>
                <AccountAmountLabel>Available {transaction.balance}</AccountAmountLabel>
            </AccountContentWrapper>
            <CTA className="account-content-wrapper cta">
                <TransactionBtn>View transactions</TransactionBtn>
            </CTA>
        </Account>
  )   

}

Card.propTypes = {
  transaction: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    balance: PropTypes.string.isRequired
  }).isRequired
}


const Account = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    background-color: #fff;
    width: 80%;
    margin: 0 auto;
    padding: 1.5rem;
    box-sizing: border-box;
    text-align: left;
    margin-bottom: 2rem;
      @media screen and (max-width: 720px) {
        flex-direction: column;
      }
`
const AccountContentWrapper = styled.div`
    width: 100%;
    flex: 1;
    text-align: start;
`
const CTA = styled(AccountContentWrapper)`
    @media (min-width: 720px) {
    flex: 0;
    }
`

const AccountTitle = styled.h3`
    margin: 0;
    padding: 0;
    font-size: 1rem;
    font-weight: normal;
`
const AccountAmount = styled.p`
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    margin: 0;
    font-size: 2.5rem;
    font-weight: bold;
`
const AccountAmountLabel = styled.p`
    margin: 0;
`