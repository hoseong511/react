import { Input, Button, Form } from 'antd';
import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addCommentRequest } from '../reducers/post';
import useInput from '../hooks/useInput';

const CommentForm = ({ post }) => {
  const id = useSelector((state) => state.user.me?.id);
  const { commentAdded, commentAdding } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const [commentText, onChangeCommentText, setCommentText] = useInput('');

  useEffect(() => {
    if (commentAdded) {
      setCommentText('');
    }
  }, [commentAdded]);

  const onSubmitComment = useCallback(() => {
    dispatch(addCommentRequest({ content: commentText, postId: post.id, userId: id }));
  }, [commentText, id]);

  return (
    <Form onFinish={onSubmitComment}>
      <Form.Item>
        <Input.TextArea value={commentText} onChange={onChangeCommentText} rows={4} />
        <Button type="primary" htmlType="submit" loading={commentAdding}>삐약</Button>
      </Form.Item>
    </Form>
  );
};
CommentForm.propTypes = {
  post: PropTypes.object.isRequired,
};

export default CommentForm;
