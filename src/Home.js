import React from 'react';
import { useHistory } from 'react-router-dom'

const Home = () => {

const history = useHistory();

const orderNow = () => {
    history.push('/build-pizza')
}


    return (
       <div className='home-order'>
           <button onClick={orderNow}>Order Now!</button>
       </div> 
    )
}

export default Home

