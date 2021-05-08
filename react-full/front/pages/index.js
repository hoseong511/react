import React from 'react';
import { useSelector } from 'react-redux';
import AppLayout from '../components/AppLayout';
import PostForm from '../components/PostForm';
import PostCard  from '../components/PostCard';
const Home = () => {
  const { isLogin } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);
  return (
    <AppLayout>
      {isLogin && <PostForm />}
      {mainPosts.map((post, index) => 
            <PostCard key={post.id} post={post}/>)/** 절대 index를 key로 설정하지 말자->데이터가 변경되는 경우를 생각해보자 */}
    </AppLayout>
  );
}

export default Home;