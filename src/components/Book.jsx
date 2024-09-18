import React from 'react'

export const Book = ({item}) => {
  return (
    <div>
     <img src={item.cover} alt={item.title}  />
     <h1>{item.title}</h1>
     <p>{item.pages}</p>
    </div>
  )
}
