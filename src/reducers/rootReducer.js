const initState = {
  posts: [
    { id: "1", title: "Pikachu", body: "Pika Pika" },
    { id: "2", title: "Bulbasaur", body: "Give me water" },
    { id: "3", title: "Charmander", body: "Its getting hot in here" }
  ]
};

const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;
