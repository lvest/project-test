import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type GoodsListItemProps = {
  info: { id: number; img: string; title: string; price: number };
};

const StLink = styled(Link)`
  all: unset;
  cursor: pointer;
`;

const GoodsItemWrapper = styled.li`
  width: 100vw;
  height: 15vh;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: gainsboro;
`;

const GoodsImg = styled.img`
  width: 13vh;
  height: 13vh;
  border: 1px solid black;
  border-radius: 10px;
`;

const GoodsInfo = styled.div`
  width: 80%;
  height: 100%;
`;

const Title = styled.h2`
  width: 100%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
`;

function GoodsListItem({ info }: GoodsListItemProps) {
  console.log(info.img);

  return (
    <StLink to={`/list/${info.id}`}>
      <GoodsItemWrapper>
        <GoodsImg src={info.img} />
        <GoodsInfo>
          <Title>{info.title}</Title>
          <h3>{info.price + '원'}</h3>
        </GoodsInfo>
      </GoodsItemWrapper>
    </StLink>
  );
}

export default GoodsListItem;
