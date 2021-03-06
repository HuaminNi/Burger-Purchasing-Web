import React from 'react'
import Aux from '../../hoc/Aux'

const orderSummary = (props) => {
  const list = Object.keys(props.ingredients)
                 .map(igKey=>{
                   return <li><span style={{textTransform:'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}</li>
                 })
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {list}
      </ul>
      <p>Continue to Checkout?</p>
    </Aux>
  )
}

export default orderSummary
