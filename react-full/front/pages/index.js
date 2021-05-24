import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import AppLayout from '../components/AppLayout';
import { FixedSizeList as List } from 'react-window';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import Mylayout from '../components/MyLayout';
import { loadPostRequest } from '../reducers/post';

const Home = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.user);
  const { mainPosts, hasMorePosts, postLoading } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(loadPostRequest());
  }, []);

  useEffect(() => {
    function onScroll() {
      console.log(postLoading);
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
      {isLoggedIn && <PostForm />}
      <List>
        
        {mainPosts.map((post) => <PostCard key={post.id} post={post} />)}
      </List>
      {/** 절대 index를 key로 설정하지 말자->데이터가 변경되는 경우를 생각해보자 */}
    </Mylayout>
  );
};

export default Home;
