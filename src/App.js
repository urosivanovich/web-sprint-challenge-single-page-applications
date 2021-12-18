import React from "react";
import { Switch, Route, Link, useHistory} from 'react-router-dom'
import Home from "./Home";
import Orders from "./Orders";
import BuildPizza from "./BuildPizza";
import { useState, useEffect } from "react";
import axios from "axios";
import * as yup from 'yup'
import formSchema from "./validation/formSchema";


const initialOrders = []
const initialDisabled = true

const initialFormValues = {
  name: '',
//dropdown
  size: '',
//radio  
  sauce: '',
  // checkboxes
  
  pepperoni: false,
  sausage: false,
  bacon: false,
  mushrooms: false,
  artichoke: false,
  olives: false,
  extraCheese: false,
  //big text input
    special: '',
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

const history = useHistory();

const postNewOrder = newOrder => {
  axios.post('https://reqres.in/api/orders', newOrder)
  .then(resp => {
      setOrders([resp.data, ...orders])
  })
  .catch(err => console.log(err))
  setFormValues(initialFormValues)
  history.push('/Orders')
}


const validate = (name, value) => {
  yup.reach(formSchema, name)
  .validate(value)
  .then(() => setFormErrors({...formErrors, [name]: ''}))
  .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
}


const inputChange = (name, value) => {
  validate(name, value) 
  setFormValues({...formValues, [name]: value})
}


 
const formSubmit = () => {
  const newOrder = {
    name: formValues.name.trim(),
    size: formValues.size,
    sauce: formValues.sauce,
    special: formValues.special.trim(),
    toppings: ['pepperoni, sausage, bacon, mushrooms, artichoke, olives, extraCheese,']
    .filter(topping => formValues[topping])
  }
  postNewOrder(newOrder)
}







useEffect(() =>{
  
},[orders])

useEffect(() => {
  formSchema.isValid(formValues).then(valid => setDisabled(!valid))
}, [formValues])


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
        {orders.map(order => {
          return (
            <Orders key={order.id} orders={order} />
          )
        })}
      </Route>
      <Route path='/' id='order-pizza'>
        <Home />
      </Route>
    </Switch>
  </div>
 )
}
export default App;
