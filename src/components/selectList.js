import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const Title = styled.span`
  font-weight: 700;
`;

const List = styled.ul`
  li {
    list-style: none;
    margin-bottom: 0;
  }
`;

const Spacer = styled.span`
  display: inline-block;
  width: 0.5em;
`;

const SelectList = ({ title, name, options, required = false }) => {
  const rendered = options.map(o => {
    // Strip all non-alphanumeric characters from option for value & id
    const val = o.replace(/[^a-zA-z0-9]/g, '');
    const id = `${name}${val}`;
    // Check if is required field
    const req = required ? 'required' : '';
    return (
      <li key={id}>
        <label>
          <input type="radio" name={name} id={id} value={val} required={req} />
          <Spacer />
          {o}
        </label>
      </li>
    );
  });

  return (
    <Container>
      <Title>
        {title}
        {required && ' *'}
      </Title>
      <List>{rendered}</List>
    </Container>
  );
};

export default SelectList;
