import React from 'react';
import {Nav, NavItem} from 'react-bootstrap';

export default function Tabs({sources, onChange, value}) {
  return (
    <Nav bsStyle="tabs" activeKey={`${value}`} onSelect={onChange}>
      {sources.map((source, i) => (
        <NavItem key={i} eventKey={`${i}`}>{source.key}</NavItem>
      ))}
    </Nav>
  )
}
