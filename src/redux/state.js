let rerenderEntireThree = () => {
}


let state = {
  profilePage: {
    posts: [
      { id: 0, text: "Привет", likesCount: 4 },
      { id: 1, text: "Как дела", likesCount: 5 },
    ],
    newPostText : ''
  },
  dialogsPage: {
    messages: [
      {
        message: "Привет",
      },
      {
        message: "Как дела?",
      },
      {
        message: "Все ок, а ты как?",
      },
    ],
    dialogs: [
      {
        id: 1,
        name: "Денис",
      },
      {
        id: 2,
        name: "Ира",
      },
      {
        id: 3,
        name: "Вадос",
      },
      {
        id: 4,
        name: "Димас",
      },
    ],
  },
};

export const addPost = () => {
  let newPost = {
    id: state.profilePage.posts.length++,
    text: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  updateNewPostText('');
  rerenderEntireThree(state);
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireThree(state);
}

export const subscribe = (observer) => {
  rerenderEntireThree = observer;      
}

export default state;
