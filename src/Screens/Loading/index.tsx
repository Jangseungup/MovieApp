import React from 'react';
import {ActivityIndicator} from 'react-native';
import Styled from 'styled-components/native';

const Container = Styled.View`
    flex: 1;
    background-color: #141414;
    align-items: center;
    justify-content: center;
`;

// ActivityIndicator => 화면에 로딩 중임을 표시하기 위해 사용
const Loading = () => {
  return (
    <Container>
      <ActivityIndicator color="#70915" size="large" />
    </Container>
  );
};

export default Loading;
