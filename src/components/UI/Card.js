import React from 'react'
import './Card.css';

export default function Card(props) {
  return (
    // const classes = 'card' +
    <div className='card'>
      {props.children}
    </div>
  )
}

