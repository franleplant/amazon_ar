import React from 'react';
import {Form, FormGroup, Button, FormControl} from 'react-bootstrap';

export default function SearchForm({value, onChange, onSubmit, loading}) {
  return (
    <Form inline>
      <FormGroup>
        <FormControl
          value={value}
          onChange={onChange}
          type="text"
          placeholder="Ingrese el nombre de un producto"
          style={{
            width: '300px',
          }}
        />
      </FormGroup>
      {' '}
      <Button type="submit" onClick={onSubmit} disabled={loading}>
        Buscar!
      </Button>
      {' '}
      { loading ? 'Loading...' : ''}
  </Form>
  )
}
