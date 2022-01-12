import React from 'react';
import styled from 'styled-components';

type GoodsInfoProps = {
  postTitle: string;
  postText: string;
};

const Wrapper = styled.section`
  width: 100vw;
  padding: 1vh;
  background-color: gainsboro;
`;

const Title = styled.h2`
  padding: 1vw;
`;

const Text = styled.p`
  padding: 1vw;
`;

function GoodsInfo({ postTitle, postText }: GoodsInfoProps) {
  return (
    <Wrapper>
      <Title>{postTitle}</Title>
      <Text>{postText}</Text>
    </Wrapper>
  );
}

export default GoodsInfo;
