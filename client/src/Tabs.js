import React from 'react';
import {Nav, NavItem} from 'react-bootstrap';

export default function Tabs({sources, onChange}) {
  return (
    <Nav bsStyle="tabs" activeKey="0" onSelect={onChange}>
      {sources.map((source, i) => (
        <NavItem key={i} eventKey={`${i}`}>{source.key}</NavItem>
      ))}
    </Nav>
  )
}
