import React from 'react';

export default function ListMeta({source}) {
  return (
    <div>
      <p><a href={source.url} target="_blank">Ver en Amazon</a></p>
    </div>
  );
}
