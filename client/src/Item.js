import React from 'react';

export default function Item(d) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <img src={d.img} width='70'/>
      <div style={{ marginLeft: '20px'}}>
        <a href={d.link}>{d.title}</a>
        <p>{d.price}</p>
      </div>
    </div>
  );
}
