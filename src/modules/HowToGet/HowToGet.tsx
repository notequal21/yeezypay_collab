import { useTranslation } from 'react-i18next';
import style from './HowToGet.module.scss';
import { cardsList } from './cardsList';
import Card from './components/Card/Card';

const HowToGet = () => {
  const { t } = useTranslation();

  return (
    <div className={style.how}>
      <div className='container'>
        <div className={style.how__title}>{t('how to get title')}</div>
        <div className={style.how__subtitle}>{t('how to get subtitle')}</div>

        <div className={style.howBody}>
          {cardsList.map((item, index) => (
            <Card
              key={index}
              num={index + 1}
              ico={item.ico}
              title={item.title}
              subtitle={item.subtitle}
              text={item.text}
              list={item.list}
              className={style.howBody__item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowToGet;
