import React from 'react'

export const PersonCard = ({item}) => {
  const person = item;

  return (
    <div className='card-container'>
      <div className='card-details'>
        <h1>Name: {person.firstName}</h1>
        <p>Gender: {person.gender}</p>
        <p>Phone: {person.phone}</p>
        <p>Color: {person.color}</p>
    </div>()
    </div>
  )
}
 