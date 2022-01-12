import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.header`
  width: 100vw;
  height: 8vh;
  padding: 0 5vw;
  display: flex;
  justify-content: end;
  align-items: center;
  position: fixed;
  top: 0;
  background-color: beige;
`;

const WriteBtn = styled(Link)`
  all: unset;
  padding: 1vw;
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
  cursor: pointer;
`;

function Header() {
  return (
    <Wrapper>
      <WriteBtn to='/write'>글쓰기</WriteBtn>
    </Wrapper>
  );
}

export default Header;
