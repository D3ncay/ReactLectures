let store = {
  _state :{
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
  },
  getState(){
    return this._state
  },
  _callSubscriber ()  {
  },
  updateNewPostText (newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  addPost(){
    let newPost = {
      id: this._state.profilePage.posts.length++,
      text: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this.updateNewPostText('');
    this._callSubscriber(this._state);
  },
  subscribe(observer){
    this._callSubscriber = observer;      
  }
}

export default store;
