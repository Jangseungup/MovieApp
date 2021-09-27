/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import React, {useContext, useEffect, useLayoutEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {StackNavigationProp} from '@react-navigation/stack';
import Styled from 'styled-components/native';
import {UserContext} from '~/Context/User';
import BigCatalogList from './BigCatalogList';
import SubCatalogList from './SubCatalogList';

const Container = Styled.ScrollView`
    flex: 1;
    background-color: #141414;
`;

const StyleButton = Styled.TouchableOpacity`
    padding: 8px;
`;

const Icon = Styled.Image``;

type NavigationProps = StackNavigationProp<MovieNaviParamList, 'MovieHome'>;

interface Props {
  navigation: NavigationProps;
}

const MovieHome = ({navigation}: Props) => {
  // 로그아웃 기능을 구현하기 위해 logout 함수 사용
  const {logout} = useContext<IUserContext>(UserContext);

  // 화면이 표시되는 동시에 동기적으로는 동작을 수행할 때 활용(= useLayoutEffect)
  // useEffect와 다르게 화면이 다 표시되기 전에 useLayoutEffect내용이 실행된다.
  // useLayoutEffect 내용이 모두 실행된 후에 컴포넌트 화면이 표시된다.
  useLayoutEffect(() => {
    // 네이게이션 헤더에 로그아웃 버튼 표시
    navigation.setOptions({
      headerRight: () => (
        <StyleButton
          onPress={() => {
            logout();
          }}>
          <Icon source={require('~/Assets/Images/ic_logout.png')} />
        </StyleButton>
      ),
    });
  }, []);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Container>
      <BigCatalogList
        url="https://yts.lt/api/v2/list_movies.json?sort_by=like_count&order_by=desc&limit=5"
        onPress={(id: number) => {
          navigation.navigate('MovieDetail', {
            id,
          });
        }}
      />
      <SubCatalogList
        title="최신 등록순"
        url="https://yts.lt/api/v2/list_movies.json?sort_by=date_added&order_by=desc&limit=10"
        onPress={(id: number) => {
          navigation.navigate('MovieDetail', {
            id,
          });
        }}
      />
      <SubCatalogList
        title="평점순"
        url="https://yts.lt/api/v2/list_movies.json?sort_by=rating&order_by=desc&limit=10"
        onPress={(id: number) => {
          navigation.navigate('MovieDetail', {
            id,
          });
        }}
      />
      <SubCatalogList
        title="다운로드순"
        url="https://yts.lt/api/v2/list_movies.json?sort_by=download_count&order_by=desc&limit=10"
        onPress={(id: number) => {
          navigation.navigate('MovieDetail', {
            id,
          });
        }}
      />
    </Container>
  );
};

export default MovieHome;
