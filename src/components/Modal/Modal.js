import React from 'react';
import classes from './Modal.css'
import Aux from '../../hoc/Aux'
import Backdrop from '../UI/Backdrop/Backdrop'

const modal = (props) => {
  return (
    <Aux>
      <Backdrop display={props.display} clicked={props.hidden}/>
      <div
        className={classes.Modal}
        style={{transform:props.display? 'translateY(0)':'translateY(-100vh)',
        opacity:props.display? '1':'0'
      }}>
          {props.children}
      </div>
    </Aux>
  )
};

export default modal;
