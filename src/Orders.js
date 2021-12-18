import React from "react"

function Orders ({orders}) {

     return (    
       
    <div className="order container">
        <p>Customer:{orders.name}</p>
        <p>Size:{orders.size}</p>
        <p>Sauce:{orders.sauce}</p>
        <div>
            {/**toppings won't render */}
          Toppings:
            {orders.toppings.map((topping, idx) => { return (<p key={idx}>{orders.topping}</p>)})}
          
        </div>
        <p>Special Request:{orders.special}</p>
    </div>

  )
}

export default Orders