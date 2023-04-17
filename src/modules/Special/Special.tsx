import style from './Special.module.scss';
import { useTranslation } from 'react-i18next';

// img imports
import img from '../../assets/img/special/img.png';
import cardBg from '../../assets/img/special/card-bg.png';
import { cardsList } from './cards';

declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false;
  }
}

const Special = () => {
  const { t } = useTranslation();

  return (
    <div className={style.special}>
      <div className='container'>
        <div className={style.specialBody}>
          <div className={style.specialBody__img}>
            <img src={img} alt='' />
          </div>
          <div className={style.special__content}>
            <div
              className={style.special__title}
              dangerouslySetInnerHTML={{ __html: t('special title') }}
            ></div>
            <div className={style.specialCards}>
              {cardsList.map((item, index) => (
                <div key={index} className={style.specialCards__item}>
                  <div className={style.specialCards__itemIco}>
                    <img src={item.ico} alt='' />
                  </div>
                  <div className={style.specialCards__itemText}>
                    {t(item.text)}
                  </div>
                </div>
              ))}

              <div className={`${style.specialCards__item} ${style._special}`}>
                <div className={`${style.specialCards__itemImg}`}>
                  <img src={cardBg} alt='' />
                </div>
                <div
                  className={style.specialCards__itemTitle}
                  dangerouslySetInnerHTML={{ __html: t('special card 4 text') }}
                ></div>
                <div
                  className={style.specialCards__itemText}
                  dangerouslySetInnerHTML={{ __html: t('special card 4 cost') }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Special;
