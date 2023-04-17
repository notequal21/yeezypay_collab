import style from './ForWho.module.scss';
import { useTranslation } from 'react-i18next';

// img imports
import img from '../../assets/img/who/img.png';
import img2x from '../../assets/img/who/img@2x.png';
import shield from '../../assets/img/who/shield.svg';

const ForWho = () => {
  const { t } = useTranslation();

  return (
    <div className={style.who}>
      <div className='container'>
        <div className={style.whoBody}>
          <div className={style.whoContent}>
            <div className={style.whoContent__title}>{t('for who title')}</div>
            <div className={style.whoContent__desc}>
              {t('for who description')}
            </div>
            <div className={style.whoContent__text}>
              <p>{t('for who text p1')}</p>
              <p>{t('for who text p2')}</p>
            </div>
            <div className={style.whoContent__trust}>
              <div className={style.whoContent__trustIcon}>
                <img src={shield} alt='' />
              </div>
              <div className={style.whoContent__trustText}>
                {t('for who trust')}
              </div>
            </div>
          </div>
          <div className={style.who__img}>
            <img src={img} srcSet={`${img} 1x, ${img2x} 2x`} alt='' />
          </div>
        </div>
        <div className={`${style.whoContent__trust} ${style._tablet}`}>
          <div className={style.whoContent__trustIcon}>
            <img src={shield} alt='' />
          </div>
          <div className={style.whoContent__trustText}>
            {t('for who trust')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForWho;
