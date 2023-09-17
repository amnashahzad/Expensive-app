import React from 'react'

export default function ExpenseIteam() {
  return (
    <div className='expense-item'>
    <div className='expense-item_description'>
        <h2>{props.title}</h2>
        <div className='expense-item_price'>${props.amount}</div>
    </div>
</div>
  )
}
