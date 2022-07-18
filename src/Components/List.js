import React from 'react'

const List = ({items}) => {
  return (
    <>
    <h2>
    <ul>
      { items.map(item=>(<li key={item} >{item}</li>))}
    </ul>
    </h2>
    </>
  )
}

export default List