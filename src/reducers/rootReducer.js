const initState = {
  posts: [
    { id: "1", title: "Pikachu", body: "Pika Pika" },
    { id: "2", title: "Bulbasaur", body: "Give me water" },
    { id: "3", title: "Charmander", body: "Its getting hot in here" }
  ]
};

const rootReducer = (state = initState, action) => {
  if (action.type === "DELETE_POST") {
    let newPosts = state.posts.filter(post => post.id !== action.id);
    return {
      ...state,
      posts: newPosts
    };
  }
  return state;
};

export default rootReducer;
