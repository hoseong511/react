import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import AppLayout from '../components/AppLayout';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import Mylayout from '../components/MyLayout';
import { loadPostRequest, LOAD_POST_REQUEST } from '../reducers/post';
import { loadMyInfoRequest } from '../reducers/user';

const Home = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { mainPosts, hasMorePosts, postLoading, actionError } = useSelector((state) => state.post);
  
  useEffect(() => {
    if (actionError) {
      alert(actionError);
    }
  }, [actionError])

  useEffect(() => {
    dispatch(loadMyInfoRequest());
    dispatch(loadPostRequest());
  }, []);
  
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

export default Home;
