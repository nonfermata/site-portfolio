import React from 'react'
import { useState } from 'react'
import Counter from './counter'
import classes from './countersList.module.css'

const CountersList = () => {
    const initialState = [
        { id: 1234, value: 0, name: 'Ненужная вещь' },
        { id: 2345, value: 1, name: 'Ложка' },
        { id: 3456, value: 2, name: 'Вилка' },
        { id: 4567, value: 3, name: 'Тарелка' },
        { id: 5678, value: 4, name: 'Набор минималиста' },
    ]
    const [counters, setCounters] = useState(initialState)

    const handleDelete = id => {
        setCounters(counters.filter(item => item.id !== id))
    }

    const handleReset = () => {
        setCounters(initialState)
    }

    const handleIncrement = id => {
        setCounters(counters.map(item => {
            item.value += item.id === id ? 1 : 0
            return item
        }))
    }

    const handleDecrement = id => {
        setCounters(counters.map(item => {
            if (item.value) {
                item.value -= item.id === id ? 1 : 0
            }
            return item
        }))
    }

    return (
        <div className={classes.countersList}>
            {counters.map((item) =>
                < Counter
                    key={item.id}
                    onDelete={handleDelete}
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                    {...item} />
            )}
            <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Сброс</button>
        </div>)
}

export default CountersList