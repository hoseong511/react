import React, { useEffect } from 'react';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import { END } from 'redux-saga';
import axios from 'axios';

import FollowList from '../components/FollowList';
import NicknameEditForm from '../components/NicknameEditForm';
import Mylayout from '../components/MyLayout';
import { LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWINGS_REQUEST, LOAD_MY_INFO_REQUEST } from '../reducers/user';
import { LOAD_POST_REQUEST } from '../reducers/post';
import wrapper from '../store/configureStore';

const Profile = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch({
      type: LOAD_FOLLOWERS_REQUEST,
    })
    dispatch({
      type: LOAD_FOLLOWINGS_REQUEST,
    })
  }, [])

  useEffect(() => {
    if (!(me && me.id)) {
      Router.push('/');
    }
  }, [me && me.id]);
  
  if (!me) {
    return null
  }
  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <Mylayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={me.Followings} />
        <FollowList header="팔로워 목록" data={me.Followers} />
      </Mylayout>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  console.log('getServerSideProps start');
  console.log(context.req.headers);  
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  context.store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });
  context.store.dispatch({
    type: LOAD_POST_REQUEST,
  });
  context.store.dispatch(END);
  console.log('getSererSideProps end');
  await context.store.sagaTask.toPromise();
});

export default Profile;
