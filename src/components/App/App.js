import React from 'react';
import '../../styles/App.css';
import Background from '../Background'
import SideBar from '../SideBar'
import MenueOpener from '../MenueOpener'
import Start from '../Start'
import Match from '../Match'
import End from '../End'

const  App = ({startView, matchView, endView}) => {
  return (
    <>
      <Background />
      <SideBar />
      <MenueOpener />
      { !startView ? null :<Start /> }
      { !matchView ? null : <Match /> }
      { !endView ? null : <End /> }
    </>
  );
}

export default App;
