import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import AppLayout from '../components/AppLayout';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import Mylayout from '../components/MyLayout';
import { loadPostRequest, LOAD_POST_REQUEST } from '../reducers/post';
import { loadMyInfoRequest, LOAD_MY_INFO_REQUEST } from '../reducers/user';
import { END } from 'redux-saga';
import wrapper from '../store/configureStore';
import axios from 'axios';

const Home = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { mainPosts, hasMorePosts, postLoading, actionError } = useSelector((state) => state.post);
  
  useEffect(() => {
    if (actionError) {
      alert(actionError);
    }
  }, [actionError])

  // useEffect(() => {
  //   dispatch(loadMyInfoRequest());
  //   dispatch(loadPostRequest());
  // }, []);
  
  useEffect(() => {
    function onScroll() {
      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight-300) {
        if (hasMorePosts && !postLoading){
          const lastId = mainPosts[mainPosts.length - 1]?.id;
          console.log(lastId);
          dispatch({
            type: LOAD_POST_REQUEST,
            lastId
          });
        }
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [hasMorePosts, postLoading, mainPosts]);
 
  return (
    <Mylayout>
      {me && <PostForm />}
      {mainPosts.map((post) => <PostCard key={post.id} post={post} />)}
    </Mylayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
  const cookie = context.req ? context.req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (context.req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  } // 프론트에서 쿠키가 공유되는 문제를 해결하는 코드
  context.store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });
  context.store.dispatch({
    type: LOAD_POST_REQUEST,
  });
  context.store.dispatch(END);
  await context.store.sagaTask.toPromise();
});

export default Home;
