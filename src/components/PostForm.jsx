import React from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';

function PostForm(props){
  let _title = null;
  let _post = null;

  function handleNewPostFormSubmission(event){
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: 'ADD_POST',
      title: _title.value,
      post: _post.value,
      vote: 0,
      id: v4()
    };
    dispatch(action);
    _title.value = '';
    _post.value = '';
  }

  return(
    <div>
      <form onSubmit={handleNewPostFormSubmission}>
        <input type='text'
          id='title'
          placeholder='Post Title'
          ref={(input) => {_title = input;}}/>
        <textarea
          id='post'
          placeholder='Post Content'
          ref={(input) => {_post = input;}}/>
        <button type='submit'>Post</button>
      </form>
    </div>
  );
}

export default connect()(PostForm);
