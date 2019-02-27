

export default (state = {}, action) => {
  switch (action.type){
  case 'ADD_POST':
    const {title, post, vote, id} = action;
    let newState = Object.assign({}, state, {
      [id]: {
        title: title,
        post: post,
        vote: vote,
        id: id
      }
    });
    return newState;
  default:
    return state;
  }
};
