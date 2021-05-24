import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import AppLayout from '../components/AppLayout';
import { WindowScroller, CellMeasurer, CellMeasurerCache, AutoSizer, List } from 'react-virtualized';

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
  
  const cache = new CellMeasurerCache({
    defaultWidth: 100,
    fixedWidth: true
  });

  const rowRenderer = ({ index, key, parent, style }) => {
      return (
          <CellMeasurer cache={cache} parent={parent} key={key} columnIndex={0} rowIndex={index}>
             {({ measure }) => (
                <PostCard key={key} post={mainPosts[index]} measure={ measure } />
              )}
          </CellMeasurer>
      );
  };
  
  return (
    <Mylayout>
      {isLoggedIn && <PostForm />}
      <WindowScroller>
          {({ height, scrollTop, isScrolling, onChildScroll }) => (
              <AutoSizer disableHeight>
                  {({ width }) => (
                      <List
                          autoHeight
                          height={height}
                          width={width}
                          overscanRowCount={0}
                          rowCount={mainPosts.length}
                          rowHeight={cache.rowHeight}
                          rowRenderer={rowRenderer}
                          deferredMeasurementCache={cache}
                      />
                  )}
              </AutoSizer>
          )}
      </WindowScroller>
      
      {/** 절대 index를 key로 설정하지 말자->데이터가 변경되는 경우를 생각해보자 */}
    </Mylayout>
  );
};

export default Home;
