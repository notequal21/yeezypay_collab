import React from 'react';
import Header from './components/Header/Header';
import style from './App.module.scss';
import Main from './modules/Main/Main';
import Footer from './components/Footer/Footer';
import { useTranslation } from 'react-i18next';
import Benefits from './modules/Benefits/Benefits';
import Special from './modules/Special/Special';
import ForWho from './modules/ForWho/ForWho';
import HowToStart from './modules/HowToStart/HowToStart';

function App() {
  const { t }: any = useTranslation();

  return (
    <div className='wrapper'>
      <div className='content'>
        <Header />

        <Main />
        <Benefits />
        <Special />
        <ForWho />
        <HowToStart />

        {/* <div className={style.test}>{t('first text')}</div>
        <div className={style.test}>{t('second text')}</div>

        <div
          className={style.test}
          dangerouslySetInnerHTML={{ __html: t('second text') }}
        ></div> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
