import { useTranslation } from 'react-i18next';
import style from './Benefits.module.scss';
import { Cards } from './cards';

const Benefits = () => {
  const { t }: any = useTranslation();

  return (
    <div className={style.benefits}>
      <div className='container'>
        <div className={style.benefits__title}>{t('benefits title')}</div>
        <div className={style.benefitsBody}>
          {Cards.map((item, index) => (
            <div key={index} className={style.benefitsBody__item}>
              <div className={style.benefitsBody__itemImg}>
                <img src={item.img} alt='' />
              </div>
              <div className={style.benefitsBody__itemTitle}>
                {t(item.text)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
