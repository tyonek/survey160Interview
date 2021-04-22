import React from 'react';
import Items from '../Items/Items';

export default function Container(props) {
  let selectedItems = props.item.filter(item => (item.selected===true))
  return (
    <div className="interview-container">
      <div className="header-wrapper">
        <div className="header bg-greenyellow">{props.header}</div>
        <div>Items Selected : {selectedItems.length}</div>
        <div className="box">
          {props.item.map((item, i) => {
            return (
              <Items
                item={item}
                key={i}
                id={i}
                toggleSelect={props.toggleSelect}
              />
            );
          })}
        </div>
      </div>
    </div>
  )
}