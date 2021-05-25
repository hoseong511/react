import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import AppLayout from '../components/AppLayout';
import { WindowScroller, CellMeasurer, CellMeasurerCache, AutoSizer, List } from 'react-virtualized';

import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import Mylayout from '../components/MyLayout';
import { loadPostRequest } from '../reducers/post';
import { loadMyInfoRequest } from '../reducers/user';

const Home = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { mainPosts, hasMorePosts, postLoading } = useSelector((state) => state.post);
   
  useEffect(() => {
    dispatch(loadMyInfoRequest());
    dispatch(loadPostRequest());
  }, []);
  
  useEffect(() => {
    function onScroll() {
      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight-300) {
        if (hasMorePosts && !postLoading){
          dispatch(loadPostRequest());
        }
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [hasMorePosts, postLoading]);
 
  return (
    <Mylayout>
      {me && <PostForm />}
      {mainPosts.map((post) => <PostCard key={post.id} post={post} />)}
    </Mylayout>
  );
};

export default Home;
