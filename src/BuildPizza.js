import React from "react"
import { useHistory } from 'react-router-dom'


const BuildPizza = (props) => {
    const {
        values,submit,change,disabled,errors
    } = props

const history = useHistory()

const onSubmit = evt => {
    evt.preventDefault()
    submit()
    history.push('/orders')
}

const onChange = evt => {
    const {name, value, checked, type} = evt.target
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse)
}





return (
        <h4>make your own</h4>
    )
}

export default BuildPizza