import React from 'react';
import { useHistory } from 'react-router-dom'

const Home = () => {

const history = useHistory();

const orderNow = () => {
    history.push('/pizza')
}
    return (
       <div className='home-order'>
           <button id='home-btn' onClick={orderNow}>Order Now!</button>
       </div> 
    )
}

export default Home

