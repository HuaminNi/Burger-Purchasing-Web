import React from 'react';
import classes from './BurgerControls.css'
import BurgerControl from './BurgerControl/BurgerControl'

const controls = [
  {label:'Salad', type:'salad'},
  {label:'Cheese', type:'cheese'},
  {label:'Bacon', type:'bacon'},
  {label:'Meat', type:'meat'},
]

const burgerControls = (props) => {
  let controllers = controls.map((el) => {
    return <BurgerControl
      key= {el.label} label = {el.label}
      added = {()=>props.ingredientAdded(el.type)}
      deleted = {()=>props.ingredientDeleted(el.type)}
      disabled = {props.disableInfo[el.type]} />
  })

  return (
    <div className = {classes.BurgerControls}>
    <p>Current Price:<strong>{props.price.toFixed(2)}</strong></p>
    {controllers}
    <button className={classes.OrderButton} disabled={!props.purchaseable} onClick={props.ordered}>ORDER NOW</button>
    </div>
  )
};

export default burgerControls;
