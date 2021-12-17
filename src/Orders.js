import React from "react"

const Orders = (orders) => {


if (!orders) {
    return <h3>Your Cart is empty</h3>
}


     return (    
    <div className="order container">
        <p>Customer:{orders.name}</p>
        <p>Size:{orders.size}</p>
        <p>Sauce:{orders.sauce}</p>
        <div className='toppings'>
            Toppings:
            <ul>
                {orders.toppings.map((topping, idx) => <li key={idx}>{topping}</li>)}
            </ul>
        </div>
        <p>Special Request:{orders.request}</p>
    </div>

  )
}

export default Orders