import React from 'react';
import '../styles/App.css';
import Background from './Background'
import SideBar from './SideBar'
import MenueOpener from './MenueOpener'
import Start from './Start'
// import Match from './Match'
// import End from './End'

function App() {
  return (
    <>
      <Background />
      <SideBar />
      <MenueOpener />
      <Start />
      {/* <Match /> */}
      {/* <End /> */}
    </>
  );
}

export default App;
