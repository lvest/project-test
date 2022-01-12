import React from 'react';
import styled from 'styled-components';
import goodslist from '../data/goodslist';
import GoodsListItem from '../components/goods/GoodsListItem';

const GoodsWrapper = styled.ul`
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

function Home() {
  return (
    <main>
      <GoodsWrapper>
        {goodslist.map((good) => {
          return <GoodsListItem key={good.id} info={good} />;
        })}
      </GoodsWrapper>
    </main>
  );
}

export default Home;
