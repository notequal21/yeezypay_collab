import React from 'react';
import Header from './components/Header/Header';
import style from './App.module.scss';
import Main from './modules/Main/Main';
import Footer from './components/Footer/Footer';
import Benefits from './modules/Benefits/Benefits';
import Special from './modules/Special/Special';
import ForWho from './modules/ForWho/ForWho';
import HowToGet from './modules/HowToGet/HowToGet';
import Form from './modules/Form/Form';
// import HowToStart from './modules/HowToStart/HowToStart';

function App() {
  return (
    <div className='wrapper'>
      <div className='content'>
        <Header />

        <Main />
        <Benefits />
        <Special />
        <ForWho />
        <HowToGet />
        <Form />
        {/* <HowToStart /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
