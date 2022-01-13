import React from 'react';
import styled from 'styled-components';

function Write() {
  const Form = styled.form`
    width: 100vw;
  `;
  return (
    <Form>
      <div>
        <label>Enter your name: </label>
        <input type='text' name='name' id='name' required />{' '}
      </div>
      <div>
        <input type='email' name='email' id='email' required />
      </div>
      <div>
        <input type='submit' value='Subscribe!' />
      </div>
    </Form>
  );
}

export default Write;
