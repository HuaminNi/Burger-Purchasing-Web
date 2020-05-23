import React, {Component} from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls'
import OrderSummary from '../../components/OrderSummary/OrderSummary'
import Modal from '../../components/Modal/Modal'

const INGREDIENTS_PRICE = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7
}

class BurgerBuilder extends Component {
  state = {
    ingredients:{
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
    purchaseable: false,
    displayable: false
  }

  addIngredientHandler = (type) => {
    const updatedIngredients = {...this.state.ingredients}
    const newCount = this.state.ingredients[type]+1
    updatedIngredients[type] = newCount
    const oldPrice = this.state.totalPrice
    const updatedPrice = INGREDIENTS_PRICE[type] + oldPrice
    this.setState({totalPrice:updatedPrice, ingredients: updatedIngredients})
    this.updatePurchaseState(updatedIngredients)
  }

  deleteIngredientHandler = (type) => {
    const updatedIngredients = {...this.state.ingredients}
    if(this.state.ingredients[type] <=0){
      return
    }
    const newCount = this.state.ingredients[type]-1
    updatedIngredients[type] = newCount
    const oldPrice = this.state.totalPrice
    const updatedPrice = oldPrice - INGREDIENTS_PRICE[type]
    this.setState({totalPrice:updatedPrice, ingredients: updatedIngredients})
    this.updatePurchaseState(updatedIngredients)
  }

  updatePurchaseState(ingredients){

    const sum = Object.keys(ingredients).map(idKey=>{return ingredients[idKey]})
                  .reduce((sum, el)=>{return sum+el},0)
    this.setState({purchaseable:sum>0})
    console.log(sum > 0)
  }

  displayModalHandler = () => {
    this.setState({displayable:true})
  }

  hiddenModalHandler = () => {
    this.setState({displayable:false})
  }

  render() {
    const disabled = {...this.state.ingredients}
    for (let key in disabled) {
      disabled[key] = disabled[key] <=0
    }
    return (
      <Aux>
        <Modal display={this.state.displayable} hidden={this.hiddenModalHandler}>
          <OrderSummary ingredients={this.state.ingredients}/>
        </Modal>
        <Burger ingredients = {this.state.ingredients}/>
        <BurgerControls
          ingredientAdded = {this.addIngredientHandler}
          ingredientDeleted = {this.deleteIngredientHandler}
          disableInfo = {disabled}
          price = {this.state.totalPrice}
          purchaseable = {this.state.purchaseable}
          ordered = {this.displayModalHandler}/>
      </Aux>

    )
  }
}

export default BurgerBuilder;
