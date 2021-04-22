import React from 'react';

export default function Items(props) {
 
  return (
    <div>
      <div
        onClick={() => props.toggleSelect(props.id)}
        className={`row-item ${props.item.selected ? "selected" : ""}`}
      >
        {props.item.name}
      </div>
    </div>

  )
}
