import React from "react"


const BuildPizza = (props) => {
    const {
        values,submit,change,disabled,errors
    } = props


const onSubmit = evt => {
    evt.preventDefault()
    submit()
   
}

const onChange = evt => {
    const {name, value, checked, type} = evt.target
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse)
}





return (
    <form onSubmit={onSubmit} id="pizza-form">

        <h2>Build Your Own</h2>

        <div className="errors messages">
            <p>{errors.name}</p>
            <p>{errors.size}</p>
            <p>{errors.sauce}</p>
        </div>

        <label>
            Customer
            <input
            id='name-input'
             value={values.name}
             onChange={onChange} 
             name='name'
             type='text'
             />
        </label>
    <div>

        <label>
            Size
          <select
          id='size-dropdown'
            name='size'
            value={values.size}
            onChange={onChange}
          >
            <option value=''>--Select an option--</option>
            <option value='small'>Small</option>
            <option value='medium'>Medium</option>
            <option value='large'>Large</option>
          </select>
        </label>
    </div>

        <div className='sauces'>
            <h4>Choose Sauce</h4>
            <label>
                Original Red
                <input 
                    type='radio'
                    name='sauce'
                    value='original red'
                    onChange={onChange}
                    checked={values.sauce === 'original red'}
                />
            </label>
            <label>
                White truffle
                <input 
                    type='radio'
                    name='sauce'
                    value='white truffle'
                    onChange={onChange}
                    checked={values.sauce === 'white truffle'}
                />
            </label>
            <label>
                Spinach Alfredo
                <input 
                    type='radio'
                    name='sauce'
                    value='spinach alfredo'
                    onChange={onChange}
                    checked={values.sauce === 'spinach alfredo'}
                />
            </label>
        </div>

        <div className="toppings">
            <h4>Choose Toppings</h4>

            <label>Pepperoni
                <input
                    type='checkbox'
                    name='pepperoni'
                    checked={values.pepperoni}
                    onChange={onChange}
                />
            </label>
            <label>Sausage
                <input
                    type='checkbox'
                    name='sausage'
                    checked={values.sausage}
                    onChange={onChange}
                />
            </label>
            <label>Bacon
                <input
                    type='checkbox'
                    name='bacon'
                    checked={values.bacon}
                    onChange={onChange}
                />
            </label>
            <label>Mushrooms
                <input
                    type='checkbox'
                    name='mushrooms'
                    checked={values.mushrooms}
                    onChange={onChange}
                />
            </label>
            <label>Olives
                <input
                    id='olives'
                    type='checkbox'
                    name='olives'
                    checked={values.olives}
                    onChange={onChange}
                />
            </label>
            <label>Extra cheese
                <input
                    type='checkbox'
                    name='extraCheese'
                    checked={values.extraCheese}
                    onChange={onChange}
                />
            </label>
        </div>
        <div className="request">
            <label>Special Request
                <textarea
                id='special-text'
                type='text'
                 name='special'
                 onChange={onChange} 
                 rows="4"
                 cols="50"
                  />
            </label>
        </div>
        <button id={'order-button'} disabled={disabled}>Order Now</button>
        
    </form>
    )
}

export default BuildPizza