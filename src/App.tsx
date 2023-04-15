import React from 'react';
import Header from './components/Header/Header';
import style from './App.module.scss';
import { useTranslation } from 'react-i18next';
import Main from './modules/Main/Main';

function App() {
  const { t }: any = useTranslation();

  return (
    <div className='wrapper'>
      <div className='content'>
        <Header />

        <Main />

        {/* <div className={style.test}>{t('first text')}</div>
        <div className={style.test}>{t('second text')}</div>

        <div
          className={style.test}
          dangerouslySetInnerHTML={{ __html: t('second text') }}
        ></div> */}
      </div>
      {/* footer */}
    </div>
  );
}

export default App;
