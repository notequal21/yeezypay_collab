import style from './Main.module.scss';

const Main = () => {
  return (
    <main className={style.main}>
      <div className='container'>
        <div className={style.mainBody}></div>
      </div>
    </main>
  );
};

export default Main;
