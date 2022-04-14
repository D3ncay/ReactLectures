import './App.css';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Header } from './components/Header/Header';
import { Wrapper } from './components/Wrapper/Wrapper';
import { ProfilePage } from './Pages/ProfilePage/ProfilePage';
import { DialogsPage } from './Pages/DialogsPage/DialogsPage';
import { Route, Routes } from 'react-router-dom';
import { FC } from 'react';
import { addPost, updateNewPostText } from './redux/state';

interface IApp{
  state: any,
}

export const App:FC<IApp> = ({state}) => {
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

