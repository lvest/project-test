import React from 'react';
import styled from 'styled-components';

type WriterInfoProps = {
  postWriter: string;
};

const Wrapper = styled.section`
  width: 100vw;
  height: 10vh;
  padding: 1vw;
  display: flex;
  align-items: center;
  background-color: wheat;
`;

function WriterInfo({ postWriter }: WriterInfoProps) {
  return <Wrapper>{postWriter}</Wrapper>;
}

export default WriterInfo;
