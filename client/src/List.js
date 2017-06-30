import React from 'react';
import Item from './Item';

export default function List({source, data}) {
  return (
    <div>
      <ul>
        {data.map((d, i) => (
            <li key={i}>
              <Item {...d} />
            </li>
        ))}
      </ul>
    </div>
  )
};
