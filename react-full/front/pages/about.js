import React from 'react';
import { useSelector } from 'react-redux';
import Head from 'next/head';
import { END } from 'redux-saga';

import { Avatar, Card } from 'antd';
import MyLayout from '../components/MyLayout';
import wrapper from '../store/configureStore';
import { LOAD_USER_INFO_REQUEST, LOAD_MY_INFO_REQUEST } from '../reducers/user';

const About = () => {
  const { userInfo, me } = useSelector((state) => state.user);
  return (
    <MyLayout>
      <Head>
        <title>호호 | NodeBird</title>
      </Head>
      {userInfo
        ? (
          <Card
            actions={[
              <div key="twit">
                짹짹
                <br />
                {userInfo.Posts}
              </div>,
              <div key="following">
                팔로잉
                <br />
                {userInfo.Followings}
              </div>,
              <div key="follower">
                팔로워
                <br />
                {userInfo.Followers}
              </div>,
            ]}
          >
            <Card.Meta
              avatar={<Avatar>{userInfo.nickname[0]}</Avatar>}
              title={userInfo.nickname}
              description="노드버드 매니아"
            />
          </Card>
        )
        : null}
    </MyLayout>
  );
};

export const getStaticProps = wrapper.getStaticProps(async (context) => {
  console.log('getStaticProps');
  context.store.dispatch({
    type: LOAD_USER_INFO_REQUEST,
    data: 1,
  });
  context.store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default About;