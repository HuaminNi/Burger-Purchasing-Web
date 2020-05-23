import React from 'react';
import classes from './Burger.css'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'


const burger = (props) => {
  // let transformedIngredients = Object.keys( props.ingredients )
  //       .map( igKey => {
  //           return [...Array( props.ingredients[igKey] )].map( ( _, i ) => {
  //               return <BurgerIngredients key={igKey + i} type={igKey} />;
  //           } );
  //       } )
  //       .reduce((arr, el) => {
  //           return arr.concat(el)
  //       }, []);
  console.log(props.ingredients)

  let transformedIngredients = Object.keys(props.ingredients)
          .map(eachKey=>{
              console.log(props.ingredients[eachKey])
              //console.log(typeof(props.ingredients[eachKey])
              return [...Array(props.ingredients[eachKey])].map((_,index)=>{
                   return <BurgerIngredients key={eachKey+index} type={eachKey}/>
              })
          })
          .reduce((arr,el)=>{
              return arr.concat(el)
          },[])
   console.log(transformedIngredients)
   if(transformedIngredients.length === 0) {
     transformedIngredients = <p>Please add the ingredient</p>
   }
  return (
    <div className={classes.Burger}>
      <BurgerIngredients type='bread-top'/>
      {transformedIngredients}
      <BurgerIngredients type='bread-bottom'/>
    </div>
  )
}

export default burger;
