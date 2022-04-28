import './App.css';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Header } from './components/Header/Header';
import { Wrapper } from './components/Wrapper/Wrapper';
import { ProfilePage } from './Pages/ProfilePage/ProfilePage';
import { DialogsPage } from './Pages/DialogsPage/DialogsPage';
import { Route, Routes } from 'react-router-dom';
import { FC } from 'react';

interface IApp{
  state: any,
  addPost: any,
  updateNewPostText: any
}

export const App:FC<IApp> = ({state, addPost, updateNewPostText}) => {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Wrapper>
        <Routes>
          <Route  element={<DialogsPage state={state.dialogsPage} />} path="/dialogs" />
          <Route element={<ProfilePage profilePage={state.profilePage}  addPost={addPost} updateNewPostText={updateNewPostText}/>} path="/" />
        </Routes>
      </Wrapper>
    </div>
  );
}

