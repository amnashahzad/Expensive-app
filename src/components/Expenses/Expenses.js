import React from 'react'
import Card from '../UI/Card'
import ExpenseItem from './ExpenseIteam'

export default function Expenses() {
  return (
    <div className=''>
        <Card>
            <ExpenseItem title="Books" amount="300"/>
            <ExpenseItem title="Bag" amount="500"/>
            <ExpenseItem title="Pens" amount="150"/>
            
        </Card>
    </div>
  )
}
