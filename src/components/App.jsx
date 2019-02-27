import React from 'react';
import PostForm from './PostForm';
import Main from './Main';
import {Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './Header';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      vote: 0
    };
    this.handleUpVoteSubmission = this.handleUpVoteSubmission.bind(this);
  }

  handleUpVoteSubmission(id){
    var newUpVote = id.vote + 1;
    this.setState({vote: newUpVote});
  }

  render(){
    return(
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><Main handleUpVoteSubmission= {this.handleUpVoteSubmission} postList={this.props.masterPostList}/>}/>
          <Route exact path='/post-form' render={()=><PostForm/>}/>
        </Switch>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    masterPostList: state
  };
};

App.propTypes = {
  masterPostList: PropTypes.object
};

export default withRouter(connect(mapStateToProps)(App));
