import React from "react";
import classes from './countersList.module.css'

const Counter = props => {
    const value = props.value

    const formatValue = () => {
        return (
            value === 0 ? "empty" : value
        )
    }

    const getBadgeClasses = () => {
        let classes = "badge m-2 "
        classes += value === 0 ? "bg-warning" : "bg-primary"
        return classes
    }

    const getDecBtnClasses = () => {
        let classes = "btn btn-sm "
        classes += value === 0 ? "bg-info" : "bg-primary"
        return classes
    }

    return (
        <div className={classes.counter}><span>{props.name}</span>
            <span className={getBadgeClasses()}>{formatValue()}</span>
            <button className="btn btn-primary btn-sm m-2" onClick={() => props.onIncrement(props.id)}>+</button>
            <button className={getDecBtnClasses()} onClick={() => props.onDecrement(props.id)}>-</button>
            <button className="btn btn-danger btn-sm m-2" onClick={() => props.onDelete(props.id)}>Delete</button>
        </div>
    )
}

export default Counter