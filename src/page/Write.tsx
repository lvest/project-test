import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  width: 100vw;
  height: 84vh;
  padding: 1vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1vw;
  background-color: palegoldenrod;
`;

const Photo = styled.input``;

const Title = styled.input``;

const Price = styled.input``;

const ContentWrapper = styled.div``;

const Content = styled.input`
  height: 50vh;
`;

const Submit = styled.input`
  background-color: wheat;
`;

function Write() {
  return (
    <main>
      <Form>
        <div>
          <Photo type='file' placeholder='사진을 등록하세요' />
        </div>
        <div>
          <Title type='text' placeholder='제목을 입력하세요' required />{' '}
        </div>
        <div>
          <Price type='text' placeholder='가격을 입력하세요' required />
        </div>
        <div>
          <Content type='text' placeholder='내을 입력하세요' required />
        </div>
        <Submit type='submit' value='등록' />
      </Form>
    </main>
  );
}

export default Write;
