import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


function Post(props){

  return (
    <div>

        <h3>{props.title}</h3>
        <h4>{props.post}</h4>
        <h4>{props.vote}</h4>
        <button onClick={() =>{props.handleUpVoteSubmission(props.id)}}>Like</button>

      <hr/>
    </div>
  );
}



Post.propTypes = {
  title: PropTypes.string.isRequired,
  post: PropTypes.string.isRequired,
  vote: PropTypes.number,
  id: PropTypes.string,
  handleUpVoteSubmission: PropTypes.func

};

export default connect()(Post);
