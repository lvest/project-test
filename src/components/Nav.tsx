import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.nav`
  width: 100vw;
  height: 8vh;
  position: fixed;
  bottom: 0;
`;

const Ul = styled.ul`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
  background-color: pink;
`;

const Li = styled.li`
  margin-left: 10px;
  font-size: 30px;
  list-style: none;
  &:hover {
    cursor: pointer;
  }
`;

const StLink = styled(Link)`
  all: unset;
`;

function Nav() {
  return (
    <Navbar>
      <Ul>
        <StLink to='/'>
          <Li>홈</Li>
        </StLink>
        <StLink to='/search'>
          <Li>검색</Li>
        </StLink>
        <StLink to='/chat'>
          <Li>채팅</Li>
        </StLink>
        <StLink to='/mypage'>
          <Li>마이페이지</Li>
        </StLink>
      </Ul>
    </Navbar>
  );
}

export default Nav;
