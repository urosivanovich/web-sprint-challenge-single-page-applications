import React from "react";
import { Switch, Route, Link} from 'react-router-dom'
import Home from "./Home";
import Orders from "./Orders";
import BuildPizza from "./BuildPizza";
import { useState, useEffect } from "react";
import axios from "axios";

const initialOrders = []
const initialDisabled = false

const initialFormValues = {
  name: '',
//dropdown
  size: '',
//radio  
  sauce: '',
//big text input
  request: '',
// checkboxes
  pepperoni: false,
  sausage: false,
  bacon: false,
  mushrooms: false,
  artichoke: false,
  olives: false,
  extraCheese: false,
}

const initialFormErrors = {
  name: '',
  size: '',
  sauce: '',
}


const App = () => {

const [orders, setOrders] = useState(initialOrders)
const [formValues, setFormValues] = useState(initialFormValues)
const [formErrors, setFormErrors] = useState(initialFormErrors)
const [disabled, setDisabled] = useState(initialDisabled)

const inputChange = (name, value) => {
  setFormValues({[name]: value, ...formValues})
}

const postNewOrder = newOrder => {
  axios.post('https://reqres.in/api/orders', newOrder)
  .then(resp => {
      console.log(resp)
  })
  .catch(err => console.log(err))
  .finally(() => setFormValues(initialFormValues))
}

const formSubmit = () => {
  const newOrder = {
    name: formValues.name.trim(),
    size: formValues.size,
    sauce: formValues.sauce,
    request: formValues.request,
    toppings: ['pepperoni, sausage, bacon, mushrooms, artichoke, olives, extraCheese,']
    .filter(topping => formValues[topping])
  }
  postNewOrder(newOrder)
}



 return (
   <div className="App">
     <nav>
       <h1>Dellarocco's Pizza</h1>
       <div className="nav-links">
         <Link to='/'>Home</Link>
         <Link to='/orders'>Orders</Link>
         <Link to='/pizza'>Pizza</Link>
       </div>
     </nav>
    <Switch>
      <Route path='/pizza'> 
        <BuildPizza 
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors} />
      </Route>
      <Route path='/orders'>
        <Orders orders={orders} />
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  </div>
 )
}
export default App;
