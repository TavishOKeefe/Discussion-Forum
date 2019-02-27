import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

function Main(props){
  return (
    <div>
      <hr/>
      {Object.keys(props.postList).map(function(postId) {
        var newPost = props.postList[postId];
        return <Post
          title={newPost.title}
          post={newPost.post}
          vote={newPost.vote}
          id={newPost.id}
          key={postId}
          handleUpVoteSubmission = {props.handleUpVoteSubmission}/>;
          })}
    </div>
  );
}

Main.propTypes = {
  postList: PropTypes.object,
  handleUpVoteSubmission: PropTypes.func
};

export default Main;
