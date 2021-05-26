import React, { useCallback } from 'react';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { followRequestAction, unFollowRequestAction } from '../reducers/user';

const FollowButton = ({ post }) => {
  const dispatch = useDispatch();
  const { me, isFollowing, isUnFollowing } = useSelector((state) => state.user);
  const isFollow = me?.Followings.find((v) => v.id === post.User.id)
  const onFollow = useCallback(() => {
    if (isFollow) {
      dispatch(unFollowRequestAction(post.User.id));
    } else {
      dispatch(followRequestAction(post.User.id));
    }
  }, [isFollow]);

  if (post.User.id === me.id) {
    return null;
  }
  return (
    <Button loading={isFollowing || isUnFollowing} onClick={onFollow}>
      {isFollow ? '언팔로우' : '팔로우'}
    </Button>
  )
};

FollowButton.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    Images: PropTypes.arrayOf(PropTypes.object),
    Comment: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
}

export default FollowButton;