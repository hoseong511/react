import React, { useCallback, useState } from 'react';
import { Button, Card, Popover } from 'antd';
import { RetweetOutlined, HeartOutlined, EllipsisOutlined, MessageOutlined, HeartTwoTone } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Avatar from 'antd/lib/avatar/avatar';
import PostImages from './PostImages';

const PostCard = ({ post }) => {
  const [liked, setLiked ] = useState(false);
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const onToggleLike = useCallback(() => {
    setLiked(!liked);
  }, [liked]);               // 이렇게 하니깐 조금더 이해된거 같다
  const onToggleComment = useCallback(() => {
    setCommentFormOpened((prev) => !prev);
  }, []);
  
  // const { me } = useSelector((state) => state.user); // 
  // const id = me?.id; // 옵셔널 체이닝
  const id = useSelector((state) => state.user.me?.id); // 
  return (
    <div style={{ marginBottom: 20 }}>
      <Card
        cover={ post.Images[0] && <PostImages images={post.Images} />}
        actions={[
          <RetweetOutlined key="retweet" />,
          liked 
            ? <HeartTwoTone twoToneColor="red" key="heart" onClick={onToggleLike} />
            : <HeartOutlined key="heart" onClick={onToggleLike} />,
          <MessageOutlined key="comment" onClick={onToggleComment}/>,
          <Popover key="more" content={(
            <Button.Group>
              {id && post.User.id === id ? (
                <>
                  <Button>수정</Button>
                  <Button type="danger">삭제</Button>
                </>
              ) :<Button>신고</Button> }
            </Button.Group>
          )}>
            <EllipsisOutlined />
          </Popover>
        ]}
      >
        <Card.Meta
          avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
          title={post.User.nickname}
          description={post.content}
        />
      </Card>
      {commentFormOpened && (
        <div>
          댓글 부분
        </div>
      )}
      {/* <CommentForm />
      <Comments /> */}
    </div>
  );
}

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    createdAt: PropTypes.object,
    Comments: PropTypes.arrayOf(PropTypes.object),
    Images: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default PostCard;