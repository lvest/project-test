import React from 'react';
import styled from 'styled-components';

type GoodsImgProps = {
  postImg: string;
};

const Wrapper = styled.section`
  width: 100vw;
  height: 40vh;
`;

const Photo = styled.img`
  width: 100%;
  height: 100%;
`;

function GoodsPhoto({ postImg }: GoodsImgProps) {
  console.log(postImg);

  return (
    <Wrapper>
      <Photo src='images/1.jpg' />
    </Wrapper>
  );
}

export default GoodsPhoto;
