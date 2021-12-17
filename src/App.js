import React from "react";
import { Switch, Route, Link} from 'react-router-dom'
import Home from "./Home";
import Orders from "./Orders";
import BuildPizza from "./BuildPizza";

const App = () => {

 return (
   <div className="App">
     <nav>
       <h1>Dellarocco's Pizza</h1>
       <div className="nav-links">
         <Link to='/'>Home</Link>
         <Link to='/orders'>Orders</Link>
         <Link to='/build-pizza'>Pizza</Link>
       </div>
     </nav>
    <Switch>
      <Route path='/build-pizza'> 
        <BuildPizza />
      </Route>
      <Route path='/orders'>
        <Orders />
      </Route>
      <Route path='/'>
        <Home />
      </Route>
    </Switch>
  </div>
 )
}
export default App;
