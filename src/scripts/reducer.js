const init = [
  {
    url: 'https://facebook.com',
    name: 'facebook.com',
    isFav: false,
    id: 'adsfasdflasdjf',
  },
];

const reducer = (state = init, action) => {
  switch (action.type) {
    case 'ADD_BOOKMARK': {
      return state.concat(action.payload);
    }
    case 'REMOVE_BOOKMARK': {
      return state.filter((bookmark) => bookmark.id !== action.payload);
    }
    case 'TOGGLE_FAVORITE': {
      return state.map((bookmark) => {
        if (bookmark.id === action.payload) {
          bookmark.isFAv = !bookmark.isFav;
        }
        return bookmark;
      });
    }
    default:
      return state;
  }
};

export default reducer;
