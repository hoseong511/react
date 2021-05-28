/* eslint-disable react/react-in-jsx-scope */
import { Button, Form, Input } from 'antd';
import { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../hooks/useInput';
import { addPostRequest, UPLOAD_IMAGES_REQUEST, REMOVE_IMAGE } from '../reducers/post';

const PostForm = () => {
  const dispatch = useDispatch();
  const { imagePaths, postAdded } = useSelector((state) => state.post);
  const imageInput = useRef(); // dom의 요소에 접근하기위한 통로
  const [text, onChangeText, setText] = useInput('');

  useEffect(() => {
    if (postAdded) {
      setText('');
    }
  }, [postAdded]);

  const onSubmit = useCallback(() => {
    if (!text || !text.trim()) {
      return alert('게시글을 작성하세요.');
    }
    const formData = new FormData();
    imagePaths.forEach((p) => {
      formData.append('image', p);
    });
    formData.append('content', text);
    return dispatch(addPostRequest(formData));
  }, [text, imagePaths]);

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  const onRemove = useCallback((index) => () => {
    dispatch({
      type: REMOVE_IMAGE,
      data: index,
    })
  })

  const onChangeImages = useCallback((e) => {
    console.log('images', e.target.files);
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, (f) => {
      imageFormData.append('image', f);
    });
    dispatch({
      type: UPLOAD_IMAGES_REQUEST,
      data: imageFormData,
    })
  }, []);

  return (
    <Form
      style={{ margin: '10px 0 20px ' }}
      encType="multipart/form-data"
      onFinish={onSubmit}
    >
      <Input.TextArea
        value={text}
        onChange={onChangeText}
        maxLength={140}
        placeholder="무슨 일이 있었나요?"
      />
      <div>
        <input type="file" name="image" multiple hidden ref={imageInput} onChange={onChangeImages} />
        <Button onClick={onClickImageUpload}>이미지 업로드</Button>
        <Button type="primary" style={{ float: 'right' }} htmlType="submit">
          짹짹
        </Button>
      </div>
      <div>
        {imagePaths.map((v, i) => (
        <div key={v} style={{ display: 'inline-block'}}>
          <img src={`http://localhost:3065/${v}`} style={{ width: '200px' }} alt={v} />
          <div>
            <Button onClick={onRemove(i)}>제거</Button>
          </div>
        </div>
      ))}
      </div>
    </Form>
  );
};

export default PostForm;
